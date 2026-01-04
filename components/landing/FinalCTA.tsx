import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';

export default function FinalCTA() {
  return (
    <section id="final-cta">
      <Container>
        <Card variant="lilac" className="p-12 md:p-16 text-center" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
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
                Request Access
              </button>
            </div>
            <p className="text-sm text-[var(--muted)]">
              We aim to respond within 24 hours.
            </p>
          </form>
        </Card>
      </Container>
    </section>
  );
}

