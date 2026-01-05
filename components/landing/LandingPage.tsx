import React from 'react';
import SiteHeader from './SiteHeader';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Features from './Features';
import Squads from './Squads';
import Rewards from './Rewards';
import Screenshots from './Screenshots';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import Container from '../ui/Container';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Main shell container */}
      <div className="max-w-[1200px] mx-auto my-8 md:my-12 bg-[var(--surface)] rounded-3xl border border-[var(--stroke)] overflow-hidden">
        <SiteHeader />
        <main>
          <section id="top" className="pt-[56px]">
            <Hero />
          </section>
          <section className="py-[72px]">
            <HowItWorks />
          </section>
          <section className="py-[72px] bg-[var(--surface-sand)]">
            <Features />
          </section>
          <section className="py-[72px]">
            <Squads />
          </section>
          <section className="py-[72px] bg-[var(--surface-mint)]">
            <Rewards />
          </section>
          <div className="h-px bg-[var(--stroke)] opacity-40" />
          <section className="py-[96px]">
            <Screenshots />
          </section>
          <section className="py-[72px] bg-[var(--surface-lilac)]">
            <FAQ />
          </section>
          <section className="py-[72px]">
            <FinalCTA />
          </section>
        </main>
        
        {/* Footer */}
        <footer className="py-8 border-t border-[var(--stroke)] bg-[var(--surface)]">
          <Container>
            <div className="text-left space-y-2">
              {/* Logo */}
              <div>
                <img 
                  src="/images/gamelayer_logo.png" 
                  alt="GameLayer" 
                  className="h-5 w-auto"
                />
              </div>
              
              {/* Company Registration */}
              <p className="text-sm text-[var(--muted)]">
                Company Registration 2503589-01 FINLAND
              </p>
              
              {/* Copyright and Contact */}
              <div className="flex items-center justify-between text-sm text-[var(--muted)]">
                <span>© 2012 - 2026 All rights reserved</span>
                <a 
                  href="mailto:hello@gamelayer.co?subject=Step-Up%20Query" 
                  className="hover:opacity-80 transition-opacity hover:text-[var(--ink)]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}

