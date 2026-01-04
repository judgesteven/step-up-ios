import React from 'react';
import Container from '../ui/Container';

export default function Screenshots() {
  const screenshots = [
    { 
      src: '/images/mission_image.png',
      label: 'Nudge',
      heading: 'Periodic challenges that fit real life',
      description: 'Participants receive gentle daily and weekly challenges designed to encourage movement without rigid targets or pressure.'
    },
    { 
      src: '/images/achievement_image.png',
      label: 'Progression',
      heading: 'Progress you can see and feel',
      description: 'Levels, achievements, and leaderboards make progress visible — reinforcing consistency and long-term habit formation.'
    },
    { 
      src: '/images/reward_image.png',
      label: 'Reinforcement',
      heading: 'Meaningful rewards for sustained effort',
      description: 'Optional rewards and incentives recognise ongoing participation and help reinforce positive behaviour over time.'
    },
  ];

  return (
    <section>
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How Step-Up keeps people moving</h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Step-Up combines simple challenges, visible progress, friendly competition, and meaningful rewards to keep people engaged — without pressure or complexity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-medium">
                  {screenshot.label}
                </p>
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {screenshot.heading}
                </h3>
              </div>
              <div className="flex justify-center">
                <img 
                  src={screenshot.src} 
                  alt={screenshot.heading} 
                  className="w-auto h-auto max-w-[352px] max-h-[660px] object-contain"
                />
              </div>
              <p className="text-base text-[var(--muted)] leading-relaxed">
                {screenshot.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

