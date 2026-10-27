import React from 'react';
import { ArrowRight, ArrowUpRight, Download, Phone, Send, ExternalLink } from 'lucide-react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  animation?: 'nudge' | 'fly-through' | 'none';
  nudgeDirection?: 'right' | 'down';
  contextualIcon?: 'arrow' | 'diagonal' | 'phone' | 'download' | 'send' | 'external';
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  animation = 'nudge',
  nudgeDirection = 'right',
  contextualIcon = 'arrow',
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  ariaLabel,
  target,
  rel,
}) => {
  // Base styling tokens - compact, refined, no layout shifts
  const baseClasses =
    'relative inline-flex items-center justify-center font-medium rounded-lg select-none text-center cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99]';

  // Variant classes
  const variantClasses = {
    primary:
      'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-sm border border-transparent',
    secondary:
      'bg-slate-50 text-brand-navy hover:bg-slate-100/90 border border-slate-200 shadow-sm',
    outline:
      'bg-transparent text-brand-blue hover:bg-blue-50/80 border border-brand-blue/30 hover:border-brand-blue',
    ghost:
      'bg-transparent text-brand-navy hover:text-brand-blue hover:bg-slate-100/70 border border-transparent',
    navy:
      'bg-brand-navy text-white hover:bg-brand-navy-deep border border-slate-800 shadow-sm',
  }[variant];

  // Size classes - compact, professional enterprise proportions
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2.5',
  }[size];

  // Icon sizing
  const iconSizeClass = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  const renderIcon = () => {
    switch (contextualIcon) {
      case 'diagonal':
        return <ArrowUpRight className={iconSizeClass} />;
      case 'phone':
        return <Phone className={iconSizeClass} />;
      case 'download':
        return <Download className={iconSizeClass} />;
      case 'send':
        return <Send className={iconSizeClass} />;
      case 'external':
        return <ExternalLink className={iconSizeClass} />;
      case 'arrow':
      default:
        return <ArrowRight className={iconSizeClass} />;
    }
  };

  // Render Inner Content
  const renderContent = () => {
    // 1. Icon-Nudge (Default for all navigation, projects, and downloads)
    if (animation === 'nudge') {
      return (
        <span className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap">
          <span className="whitespace-nowrap">{children}</span>
          <span className="button-icon" aria-hidden="true">
            {nudgeDirection === 'down' ? <Download className={iconSizeClass} /> : renderIcon()}
          </span>
        </span>
      );
    }

    // 2. Arrow Fly-Through (Synchronized width windows)
    if (animation === 'fly-through') {
      return (
        <span className="btn-flythrough-inner">
          <span className="btn-window-leading" aria-hidden="true">
            <span className="btn-icon-inner">
              {contextualIcon === 'send' ? <Send className={iconSizeClass} /> : <Phone className={iconSizeClass} />}
            </span>
          </span>
          <span className="btn-label-text">{children}</span>
          <span className="btn-window-trailing" aria-hidden="true">
            <span className="btn-icon-inner">
              {renderIcon()}
            </span>
          </span>
        </span>
      );
    }

    // 3. Static button
    return <span className="whitespace-nowrap">{children}</span>;
  };

  // Nudge animation class hook
  const animationClass =
    animation === 'nudge'
      ? nudgeDirection === 'down'
        ? 'button-download'
        : 'button-forward'
      : animation === 'fly-through'
      ? 'btn-flythrough'
      : '';

  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${animationClass} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick as any}
        className={combinedClasses}
        aria-label={ariaLabel}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer ' + (rel || '') : rel}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick as any}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {renderContent()}
    </button>
  );
};
