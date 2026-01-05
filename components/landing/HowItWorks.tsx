import React from 'react';
import Container from '../ui/Container';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Join your team',
      description: 'Get started by joining a team — a group of friends, colleagues, or community members taking part together.',
      background: 'var(--surface)',
    },
    {
      number: '2',
      title: 'Complete activity challenges',
      description: 'Take on daily and weekly activity challenges designed to be achievable, inclusive, and easy to fit into everyday life.',
      background: 'var(--pastel-mint)',
    },
    {
      number: '3',
      title: 'Follow your progression',
      description: 'Track your progress as you move through levels, earn achievements, and see how you\'re doing on team and community leaderboards.',
      background: 'var(--pastel-sand)',
    },
    {
      number: '4',
      title: 'Unlock meaningful rewards',
      description: 'Turn consistent activity into recognition and rewards — from digital milestones to real-world incentives, defined by your organisation or programme.',
      background: 'var(--pastel-lilac)',
    },
  ];

  return (
    <section id="getting-started">
      <Container>
        <div className="rounded-[24px] border border-[var(--stroke)] bg-white px-[40px] py-[48px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Encouraging daily movement</h2>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Step-Up is designed to make physical activity part of everyday life — in ways that feel achievable, supportive, and inclusive for everyone.
            </p>
          </div>
          
          {/* Progress strip */}
          <div className="mt-10">
            {/* Desktop: horizontal strip */}
            <div className="hidden md:flex rounded-[32px] overflow-hidden">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex-1 px-8 py-10 ${
                    index === 0 ? 'rounded-l-[32px]' : ''
                  } ${
                    index === steps.length - 1 ? 'rounded-r-[32px]' : ''
                  }`}
                  style={{
                    backgroundColor: step.background,
                  }}
                >
                  <div className="mb-3">
                    <span className="text-5xl font-bold text-[var(--ink)]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="text-base text-[var(--muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile: vertical stack */}
            <div className="md:hidden space-y-2">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="rounded-[24px] px-6 py-8"
                  style={{
                    backgroundColor: step.background,
                  }}
                >
                  <div className="mb-3">
                    <span className="text-5xl font-bold text-[var(--ink)]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold mb-2 text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="text-base text-[var(--muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

