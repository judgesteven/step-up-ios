import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';

export default function FinalCTA() {
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
              
              <form className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--stroke)] bg-white text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
                <input
                  type="email"
                  placeholder="name@organisation.com"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--stroke)] bg-white text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
                <textarea
                  placeholder="Tell us about your organisation, the type of programme you're considering, and any specific requirements."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--stroke)] bg-white text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[var(--accent)] text-white px-10 py-4 font-bold text-lg rounded-[9999px] hover:opacity-90 transition-all duration-200"
                  >
                    Learn More
                  </button>
                </div>
                <p className="text-sm text-[var(--ink)]">
                  We typically respond in under 24 hours
                </p>
              </form>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

