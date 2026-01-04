'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--surface)]/95 backdrop-blur-sm border-b border-[var(--stroke)]">
      <Container>
        <div className="relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/gamelayer_logo.png" 
                alt="GameLayer" 
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-[var(--ink)] hover:opacity-80 transition-colors">
                How it works
              </a>
              <a href="#features" className="text-[var(--ink)] hover:opacity-80 transition-colors">
                Features
              </a>
              <a href="#rewards" className="text-[var(--ink)] hover:opacity-80 transition-colors">
                Rewards
              </a>
              <a href="#faq" className="text-[var(--ink)] hover:opacity-80 transition-colors">
                FAQ
              </a>
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button href="#final-cta" variant="primary" className="!rounded-[9999px]">
                Request Access
              </Button>
              
              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[var(--ink)]"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-20 bg-white border border-[var(--stroke)] rounded-b-3xl shadow-lg">
              <nav className="flex flex-col py-4">
                <a
                  href="#how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-[var(--ink)] hover:opacity-80 hover:bg-[var(--surface)] transition-colors"
                >
                  How it works
                </a>
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-[var(--ink)] hover:opacity-80 hover:bg-[var(--surface)] transition-colors"
                >
                  Features
                </a>
                <a
                  href="#rewards"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-[var(--ink)] hover:opacity-80 hover:bg-[var(--surface)] transition-colors"
                >
                  Rewards
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-[var(--ink)] hover:opacity-80 hover:bg-[var(--surface)] transition-colors"
                >
                  FAQ
                </a>
              </nav>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}

