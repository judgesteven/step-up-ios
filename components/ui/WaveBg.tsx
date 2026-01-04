import React from 'react';

interface WaveBgProps {
  className?: string;
}

export default function WaveBg({ className = '' }: WaveBgProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity: 0.15 }}>
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
          fill="currentColor"
        />
        <path
          d="M0,120 Q300,80 600,120 T1200,120 L1200,200 L0,200 Z"
          fill="currentColor"
          style={{ opacity: 0.6 }}
        />
        <path
          d="M0,140 Q300,110 600,140 T1200,140 L1200,200 L0,200 Z"
          fill="currentColor"
          style={{ opacity: 0.4 }}
        />
      </svg>
    </div>
  );
}

