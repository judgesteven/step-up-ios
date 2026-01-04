'use client';

import React, { useState } from 'react';

interface PhoneMockProps {
  src: string;
  alt?: string;
  className?: string;
  showBadge?: boolean;
  hidePlaceholder?: boolean;
}

export default function PhoneMock({ src, alt = 'Step-Up app screenshot', className = '', showBadge = false, hidePlaceholder = false }: PhoneMockProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* iPhone frame */}
      <div className="relative mx-auto" style={{ width: '320px', maxWidth: '100%' }}>
        {/* Outer bezel */}
        <div className="bg-black rounded-[2.5rem] p-2.5 shadow-2xl" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          {/* Screen area */}
          <div className="bg-black rounded-[2rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
            
            {/* Content */}
            <div className="relative" style={{ aspectRatio: '9/19.5', width: '100%' }}>
              {!imageError ? (
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : hidePlaceholder ? (
                <div className="w-full h-full bg-transparent" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Step-Up</p>
                  </div>
                </div>
              )}
              
              {/* Badge overlay */}
              {showBadge && (
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-[var(--stroke)]">
                    <span className="text-xs font-semibold text-[var(--ink)]">Today's mission</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

