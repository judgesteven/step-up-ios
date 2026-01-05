'use client';

import React, { useState, useEffect } from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';

const FREE_EMAIL_DOMAINS = [
  'gmail.com',
  'googlemail.com',
  'outlook.com',
  'hotmail.com',
  'live.com',
  'yahoo.com',
  'icloud.com',
  'me.com',
  'proton.me',
  'protonmail.com',
  'aol.com',
  'gmx.com',
];

export default function FinalCTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formShownAt, setFormShownAt] = useState<number | null>(null);
  const [showWorkEmailWarning, setShowWorkEmailWarning] = useState(false);
  const [hasConfirmedFreeEmail, setHasConfirmedFreeEmail] = useState(false);

  // Set form shown timestamp on mount
  useEffect(() => {
    setFormShownAt(Date.now());
  }, []);

  // Reset free email confirmation when email changes
  useEffect(() => {
    setHasConfirmedFreeEmail(false);
    setShowWorkEmailWarning(false);
  }, [email]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFreeEmailDomain = (email: string): boolean => {
    if (!email || !email.includes('@')) return false;
    const domain = email.split('@')[1]?.toLowerCase();
    return FREE_EMAIL_DOMAINS.includes(domain);
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        closeToast();
      }, toast.type === 'success' ? 3000 : 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Honeypot check
    if (honeypot) {
      return;
    }

    // Time-to-submit check
    if (formShownAt) {
      const elapsedMs = Date.now() - formShownAt;
      if (elapsedMs < 2500) {
        showToast('Please take a moment to review your details and try again.', 'error');
        return;
      }
    }

    // Validation
    if (!name.trim() || !email.trim() || !description.trim()) {
      showToast('Please fill in all fields.', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    // Free email domain check
    if (isFreeEmailDomain(email)) {
      if (!showWorkEmailWarning) {
        // First click - show warning, don't submit
        setShowWorkEmailWarning(true);
        return;
      }
      if (!hasConfirmedFreeEmail) {
        // Second click - confirm and allow submission
        setHasConfirmedFreeEmail(true);
        // Continue to submission below
      }
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xdakbboa', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          description: description.trim(),
        }),
      });

      if (response.ok) {
        showToast('Success! We will review your request and get back to you shortly.', 'success');
        setName('');
        setEmail('');
        setDescription('');
        setShowWorkEmailWarning(false);
        setHasConfirmedFreeEmail(false);
        setStatus('idle');
      } else {
        showToast('Something went wrong. Please try again.', 'error');
        setStatus('idle');
      }
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error');
      setStatus('idle');
    }
  };

  return (
    <section id="final-cta">
      <Container>
        <Card variant="lilac" className="!border-0 overflow-hidden rounded-[24px]" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <div className="relative p-12 md:p-16">
            {/* Subtle wave background - softer than Hero */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: 0.10 }}>
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 1200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,100 Q300,75 600,100 T1200,100 L1200,200 L0,200 Z"
                  fill="currentColor"
                  style={{ opacity: 0.9 }}
                />
                <path
                  d="M0,120 Q300,95 600,120 T1200,120 L1200,200 L0,200 Z"
                  fill="currentColor"
                  style={{ opacity: 0.5 }}
                />
                <path
                  d="M0,140 Q300,115 600,140 T1200,140 L1200,200 L0,200 Z"
                  fill="currentColor"
                  style={{ opacity: 0.3 }}
                />
              </svg>
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
                Supporting healthier habits, together
              </h2>
              
              <p className="text-lg text-[var(--ink)] max-w-2xl mx-auto mb-10">
                Tell us about your organisation and what you're looking to achieve. We'll review your details and get back to you to discuss how Step-Up could work for your programme.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[var(--stroke)] bg-white text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
                <div>
                  <input
                    type="email"
                    placeholder="name@organisation.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[var(--stroke)] bg-white text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                  {showWorkEmailWarning && (
                    <p className="text-xs text-[var(--muted)] mt-1 text-left">
                      For programme requests, please use a work email where possible.
                    </p>
                  )}
                </div>
                <textarea
                  placeholder="Tell us about your organisation, the type of programme you're considering, and any specific requirements."
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[var(--stroke)] bg-white text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bg-[var(--accent)] text-white px-10 py-4 font-bold text-lg rounded-[9999px] hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Learn More'}
                  </button>
                </div>
                <p className="text-sm text-[var(--ink)]">
                  We typically respond in under 24 hours
                </p>
              </form>
            </div>
            
            {/* Toast Popup */}
            {toast && (
              <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none md:items-end md:justify-end md:p-6">
                <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 max-w-md w-full mx-4 md:mx-0 pointer-events-auto relative z-[60]" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
                  <button
                    onClick={closeToast}
                    className="absolute top-2 right-2 text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <p className="text-base text-[var(--ink)] pr-6">
                    {toast.message}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>
      </Container>
    </section>
  );
}

