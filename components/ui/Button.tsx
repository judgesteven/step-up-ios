import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-block px-6 py-3 rounded-xl font-semibold text-base transition-all duration-200';
  
  const variantStyles = {
    primary: 'bg-[var(--accent)] text-white hover:opacity-90 hover:shadow-lg',
    secondary: 'bg-white text-[var(--ink)] border-2 border-[var(--stroke)] hover:bg-[var(--surface)]',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}

