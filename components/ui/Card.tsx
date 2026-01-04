import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'lilac' | 'mint' | 'sand';
  style?: React.CSSProperties;
}

export default function Card({ children, className = '', variant = 'default', style }: CardProps) {
  const variantStyles = {
    default: 'bg-white',
    lilac: 'bg-[var(--pastel-lilac)]',
    mint: 'bg-[var(--pastel-mint)]',
    sand: 'bg-[var(--pastel-sand)]',
  };

  const defaultStyle = { boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)' };
  const combinedStyle = style ? { ...defaultStyle, ...style } : defaultStyle;

  return (
    <div
      className={`rounded-2xl border border-[var(--stroke)] ${variantStyles[variant]} ${className}`}
      style={combinedStyle}
    >
      {children}
    </div>
  );
}

