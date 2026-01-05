import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import WaveBg from '../ui/WaveBg';

export default function Hero() {
  return (
    <section className="w-full pb-20 md:pb-28">
      <Container>
        <div className="mx-auto max-w-[1120px]">
          {/* White header area */}
          <div className="px-[56px] pt-[48px] pb-[28px]">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-[var(--ink)] tracking-tight">
              Step-Up
            </h1>
            
            <p className="text-2xl md:text-3xl text-[var(--muted)] font-semibold max-w-md mt-4">
              Making everyday movement a shared habit
            </p>
          </div>
          
          {/* Lilac panel - normal flow block */}
          <section className="mt-[22px] relative lg:overflow-visible">
            <div className="rounded-[24px] bg-[var(--pastel-lilac)] border border-[var(--stroke)] overflow-hidden">
              <div className="relative px-[56px] py-[44px]">
                <WaveBg />
                
                <div className="relative z-10">
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-base text-[var(--ink)] max-w-md">
                      Step-Up is a simple way to encourage people to move more — together.
                      Designed for communities, workplaces, and public health programmes, Step-Up turns everyday walking into inclusive, motivating challenges that fit real lives.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 pt-2">
                      <span className="px-4 py-2 rounded-full bg-white/80 text-sm font-semibold text-[var(--ink)] border border-[var(--stroke)]">
                        Daily & Weekly Challenges
                      </span>
                      <span className="px-4 py-2 rounded-full bg-white/80 text-sm font-semibold text-[var(--ink)] border border-[var(--stroke)]">
                        Competition & Collaboration
                      </span>
                      <span className="px-4 py-2 rounded-full bg-white/80 text-sm font-semibold text-[var(--ink)] border border-[var(--stroke)]">
                        Progression & Achievements
                      </span>
                      <span className="px-4 py-2 rounded-full bg-white/80 text-sm font-semibold text-[var(--ink)] border border-[var(--stroke)]">
                        Rewards & Benefits
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button href="#final-cta" variant="primary" className="text-lg px-10 py-4 font-bold !rounded-[9999px]">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero image - normal flow on mobile, absolute overlapping on desktop */}
            <div className="relative mt-[24px] flex justify-center lg:absolute lg:mt-0 lg:right-[56px] lg:top-[-100px] lg:z-20">
              <img 
                src="/images/hero_image.png" 
                alt="Step-Up app hero screenshot" 
                className="w-auto h-auto max-w-[352px] max-h-[660px] object-contain"
              />
            </div>
          </section>
          
          {/* Trust line below lilac panel */}
          <div className="px-[56px] mt-6">
            <p className="text-sm text-[var(--ink)]">
              Powered by <span className="font-semibold">GameLayer</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

