import React from 'react';
import { 
  ArrowUpRight, 
  ArrowRight,
  Phone, 
  Download, 
  Eye, 
  ExternalLink, 
  Send, 
  Mail 
} from 'lucide-react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  animation?: 'fly-through' | 'nudge' | 'none';
  contextualIcon?: 'phone' | 'download' | 'eye' | 'external' | 'send' | 'mail';
  nudgeDirection?: 'right' | 'down';
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
  animation = 'fly-through',
  contextualIcon = 'phone',
  nudgeDirection = 'right',
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  ariaLabel,
  target,
  rel,
}) => {
  // Base styling tokens
  const baseClasses =
    'relative inline-flex items-center justify-center font-semibold rounded-xl select-none text-center cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]';

  // Variant classes
  const variantClasses = {
    primary:
      'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-sm hover:shadow-soft-sm border border-transparent',
    secondary:
      'bg-slate-100 text-brand-navy hover:bg-slate-200/80 border border-slate-200/90 shadow-soft-sm',
    outline:
      'bg-transparent text-brand-blue hover:bg-blue-50/80 border border-brand-blue/30 hover:border-brand-blue',
    ghost:
      'bg-transparent text-brand-navy hover:text-brand-blue hover:bg-slate-50 border border-transparent',
    navy:
      'bg-brand-navy text-white hover:bg-brand-navy-deep border border-slate-800 shadow-soft-sm',
  }[variant];

  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-6 py-3.5',
  }[size];

  // Icon sizing (Standardized 16px icon in 20px window)
  const iconSizeClass = 'w-4 h-4';

  const renderContextualIcon = () => {
    switch (contextualIcon) {
      case 'phone':
        return <Phone className={iconSizeClass} />;
      case 'download':
        return <Download className={iconSizeClass} />;
      case 'eye':
        return <Eye className={iconSizeClass} />;
      case 'external':
        return <ExternalLink className={iconSizeClass} />;
      case 'send':
        return <Send className={iconSizeClass} />;
      case 'mail':
        return <Mail className={iconSizeClass} />;
      default:
        return <Phone className={iconSizeClass} />;
    }
  };

  const arrowIcon =
    contextualIcon === 'external' ? (
      <ExternalLink className={iconSizeClass} />
    ) : (
      <ArrowUpRight className={iconSizeClass} />
    );

  const renderContent = () => {
    if (animation === 'fly-through') {
      return (
        <span className="btn-flythrough-inner">
          {/* Leading Contextual Icon Window (Expands 0px -> 20px) */}
          <span className="btn-window-leading" aria-hidden="true">
            <span className="btn-icon-inner">
              {renderContextualIcon()}
            </span>
          </span>

          {/* Button Text Label (Completely stable, zero shift) */}
          <span className="btn-label-text">{children}</span>

          {/* Trailing Arrow Window (Contracts 20px -> 0px) */}
          <span className="btn-window-trailing" aria-hidden="true">
            <span className="btn-icon-inner">
              {arrowIcon}
            </span>
          </span>
        </span>
      );
    }

    if (animation === 'nudge') {
      const nudgeClass =
        nudgeDirection === 'down' ? 'btn-nudge-icon-down' : 'btn-nudge-icon-right';

      return (
        <span className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap">
          <span className="whitespace-nowrap">{children}</span>
          <span className={`btn-nudge-icon ${nudgeClass}`} aria-hidden="true">
            {nudgeDirection === 'down' ? (
              <Download className={iconSizeClass} />
            ) : (
              <ArrowRight className={iconSizeClass} />
            )}
          </span>
        </span>
      );
    }

    return <span className="whitespace-nowrap">{children}</span>;
  };

  const animationClass =
    animation === 'fly-through' ? 'btn-flythrough' : animation === 'nudge' ? 'btn-nudge' : '';

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
