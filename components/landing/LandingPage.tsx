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
            <div className="space-y-4">
              {/* Logo and Company Name */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <img 
                  src="/images/gamelayer_logo.png" 
                  alt="GameLayer" 
                  className="h-6 w-auto"
                />
                <span className="text-base font-semibold text-[var(--ink)]">GameLayer</span>
              </div>
              
              {/* Company Registration */}
              <div className="text-center text-sm text-[var(--ink)]">
                <p>Company Registration 2503589-01 FINLAND</p>
              </div>
              
              {/* Copyright and Contact */}
              <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[var(--ink)] gap-2">
                <p>© 2012 - 2025 All rights reserved</p>
                <a 
                  href="mailto:contact@gamelayer.co" 
                  className="hover:opacity-80 transition-opacity"
                >
                  Contact Us - contact@gamelayer.co
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}

