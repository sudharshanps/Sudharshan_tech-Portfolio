import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Bot, ArrowRight, User } from 'lucide-react';

interface AIAssistantWidgetProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
}

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({ onOpenEnquiry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I am the SUDHARSHAN_TECH Engineering Assistant. I can answer questions regarding our services, client deliveries like TECHNICO, edge computer vision capabilities, or help you connect with Founder Sudharshan.P.S.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || inputValue.trim();
    if (!textToSend || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: textToSend }),
      });

      const data = await res.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text:
          data.answer ||
          'SUDHARSHAN_TECH engineers practical digital systems in web development, custom software, and computer vision. You can start a consultation with Founder Sudharshan.P.S anytime.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      // Local fallback
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text:
          'SUDHARSHAN_TECH is an independent technology company founded by Sudharshan.P.S in Coimbatore, India. We engineer web platforms (TECHNICO), computer vision systems (AI Invigilation), and bespoke software. Click "Start a Project" to request an itemized proposal.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    'What services do you offer?',
    'Tell me about TECHNICO',
    'How do I contact Founder Sudharshan?',
    'Computer Vision capabilities',
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-navy text-white shadow-soft-xl border border-slate-700 hover:border-brand-blue-glow transition-all cursor-pointer group"
          aria-label="Toggle SUDHARSHAN_TECH AI Assistant"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <Bot className="w-4 h-4 text-brand-blue-glow" />
          <span className="text-xs font-mono font-semibold">ST Assistant</span>
        </motion.button>
      </div>

      {/* Chat Window Dialogue */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-96 max-h-[540px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-brand-navy text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-600/30 text-brand-blue-glow flex items-center justify-center border border-blue-500/40">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>SUDHARSHAN_TECH Assistant</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </h4>
                  <p className="text-[10px] text-slate-400 font-mono">
                    Grounded on Approved Company Knowledge
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Thread */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-start gap-2 ${
                    m.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {m.sender === 'assistant' && (
                    <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-brand-blue shrink-0 mt-0.5 border border-slate-200">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-2xl max-w-[82%] leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-brand-blue text-white rounded-tr-xs'
                        : 'bg-slate-100 text-slate-700 rounded-tl-xs border border-slate-200/60'
                    }`}
                  >
                    <p>{m.text}</p>
                    <span
                      className={`text-[9px] font-mono block mt-1 ${
                        m.sender === 'user' ? 'text-blue-100 text-right' : 'text-slate-400'
                      }`}
                    >
                      {m.timestamp}
                    </span>
                  </div>

                  {m.sender === 'user' && (
                    <div className="w-6 h-6 rounded-md bg-brand-navy flex items-center justify-center text-white shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] p-2">
                  <Sparkles className="w-3.5 h-3.5 animate-spin text-brand-blue" />
                  <span>Synthesizing response...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompts Bar */}
            <div className="px-3 py-2 bg-slate-50 border-t border-slate-100 overflow-x-auto flex gap-1.5 no-scrollbar">
              {quickPrompts.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="px-2 py-1 rounded-full bg-white text-slate-600 border border-slate-200 hover:border-brand-blue hover:text-brand-blue text-[10px] font-mono shrink-0 transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar & Conversion CTA */}
            <div className="p-3 bg-white border-t border-slate-100 space-y-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a technical or service question..."
                  className="flex-1 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:border-brand-blue focus:bg-white"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2 rounded-xl bg-brand-blue text-white disabled:opacity-40 hover:bg-brand-blue-dark transition-colors cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              <div className="flex items-center justify-between pt-1 text-[11px] font-mono">
                <span className="text-slate-400">Ready to build?</span>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenEnquiry();
                  }}
                  className="text-brand-blue font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
