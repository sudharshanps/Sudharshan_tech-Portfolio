import React from 'react';
import { 
  ArrowUpRight, 
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
    'relative inline-flex items-center justify-center font-semibold rounded-xl select-none text-center cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue disabled:opacity-60 disabled:cursor-not-allowed group active:scale-[0.98]';

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
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  }[size];

  // Contextual icon renderer
  const renderContextualIcon = () => {
    const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-4 h-4' : 'w-4 h-4';
    switch (contextualIcon) {
      case 'phone':
        return <Phone className={iconSize} />;
      case 'download':
        return <Download className={iconSize} />;
      case 'eye':
        return <Eye className={iconSize} />;
      case 'external':
        return <ExternalLink className={iconSize} />;
      case 'send':
        return <Send className={iconSize} />;
      case 'mail':
        return <Mail className={iconSize} />;
      default:
        return <Phone className={iconSize} />;
    }
  };

  const arrowIcon =
    contextualIcon === 'external' ? (
      <ExternalLink className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
    ) : (
      <ArrowUpRight className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
    );

  // Render Inner Content with exact animation kinematics
  const renderContent = () => {
    if (animation === 'fly-through') {
      // EXACT WIDTH STABILITY KINEMATICS:
      // Leading window: width 0 -> width 20px (w-5)
      // Trailing window: width 20px (w-5) -> width 0
      // Total width allocated: 20px constant at all times!
      return (
        <span className="inline-flex items-center justify-center whitespace-nowrap">
          {/* Leading Contextual Icon Window (Expands from 0 to 20px) */}
          <span
            className="w-0 group-hover:w-5 group-focus-visible:w-5 overflow-hidden flex items-center justify-start shrink-0 transition-[width] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
            aria-hidden="true"
          >
            <span className="-translate-x-full group-hover:translate-x-0 group-focus-visible:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] shrink-0 pr-1">
              {renderContextualIcon()}
            </span>
          </span>

          {/* Button Text Label (Completely stable, zero shift) */}
          <span className="whitespace-nowrap px-0.5">{children}</span>

          {/* Trailing Arrow Window (Contracts from 20px to 0) */}
          <span
            className="w-5 group-hover:w-0 group-focus-visible:w-0 overflow-hidden flex items-center justify-end shrink-0 transition-[width] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
            aria-hidden="true"
          >
            <span className="translate-x-0 group-hover:translate-x-full group-focus-visible:translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] shrink-0 pl-1">
              {arrowIcon}
            </span>
          </span>
        </span>
      );
    }

    if (animation === 'nudge') {
      const nudgeClass =
        nudgeDirection === 'down'
          ? 'group-hover:translate-y-1 group-focus-visible:translate-y-1'
          : 'group-hover:translate-x-1 group-focus-visible:translate-x-1';

      return (
        <span className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap">
          <span className="whitespace-nowrap">{children}</span>
          <span
            className={`inline-flex shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.25,1,0.5,1)] ${nudgeClass}`}
            aria-hidden="true"
          >
            {arrowIcon}
          </span>
        </span>
      );
    }

    // Default static
    return <span className="whitespace-nowrap">{children}</span>;
  };

  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

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
