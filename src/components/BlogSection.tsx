import React, { useState } from 'react';
import { BookOpen, Clock, Share2, Check } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/portfolioData';

export const BlogSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (articleId: string, title: string) => {
    const url = `${window.location.origin}#insights`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${title} — Read on SUDHARSHAN_TECH: ${url}`);
      setCopiedId(articleId);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="insights" className="py-16 md:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold text-brand-navy mb-3 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-brand-blue" />
            <span>Engineering Insights & Writing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-2">
            Technical Perspectives from Founder Sudharshan.P.S
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Practical reflections on computer vision optimization, secure web architecture, and eliminating software complexity in production systems.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200 shadow-xs hover:border-brand-blue/50 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Category & Read Time */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="text-brand-blue font-semibold">{article.category}</span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-2 leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{article.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-white text-slate-600 font-mono text-[10px] border border-slate-200"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Share */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">By {article.author}</span>

                <button
                  onClick={() => handleShare(article.id, article.title)}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-brand-navy cursor-pointer transition-colors"
                  title="Share article summary"
                  aria-label={`Share ${article.title}`}
                >
                  {copiedId === article.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Share</span>
                    </>
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
