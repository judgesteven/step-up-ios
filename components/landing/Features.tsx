import React from 'react';

export default function Features() {
  const features = [
    {
      title: 'Daily & weekly challenges',
      description: 'Regular daily and weekly challenges help maintain interest and momentum, without creating pressure or rigid targets.',
    },
    {
      title: 'Streaks for habit formation',
      description: 'Streaks psychologically reinforce regular movement over time, helping participants build and maintain healthy habits.',
    },
    {
      title: 'Community participation',
      description: 'Designed to work across teams, organisations, and large public groups, supporting participation at every scale.',
    },
    {
      title: 'Achievements and milestones',
      description: 'Milestones and achievements recognise progress at both individual and group level, reinforcing positive behaviour.',
    },
    {
      title: 'Flexible leaderboards',
      description: 'Leaderboards provide visibility of progress within teams, communities, or campaigns, without overemphasising competition.',
    },
    {
      title: 'Rewards and incentives',
      description: 'Optional rewards and incentives help reinforce positive behaviour, defined by the organisation or programme.',
    },
  ];

  return (
    <section id="engagement">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8 lg:px-12">
        <div className="rounded-[24px] border border-[var(--stroke)] bg-white px-[40px] py-[48px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Building long-term engagement</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column: Narrative */}
            <div className="space-y-6">
              <p className="text-lg text-[var(--ink)] leading-relaxed">
                Step-Up is designed to keep people engaged over time — not just for a week or a challenge.  
                By combining gentle motivation, social participation, and visible progress, it helps turn everyday walking into a habit that lasts.
              </p>
              <p className="text-base text-[var(--muted)] italic">
                Built for consistency, not intensity.
              </p>
            </div>
            
            {/* Right column: Feature clusters */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="pl-6 border-l-4 border-[var(--stroke)] hover:border-[var(--accent)] transition-colors cursor-pointer">
                  <h3 className="text-lg font-bold mb-1.5 text-[var(--ink)]">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-[var(--muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Trust line */}
          <div className="mt-16 pt-8 border-[var(--stroke)]" style={{ borderTopWidth: '1.28px' }}>
            <p className="text-lg font-semibold text-[var(--ink)] text-center mb-2">
              Built on top of GameLayer's API platform
            </p>
            <p className="text-base text-[var(--muted)] text-center mb-4">
              Proven gamification platform used by organisations globally to power missions, progression, rewards, and engagement at scale
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[var(--pastel-lilac)] text-sm font-semibold text-[var(--ink)] border border-[var(--stroke)]">
                Challenges
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[var(--pastel-lilac)] text-sm font-semibold text-[var(--ink)] border border-[var(--stroke)]">
                Virtual Currencies
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[var(--pastel-lilac)] text-sm font-semibold text-[var(--ink)] border border-[var(--stroke)]">
                Leaderboards
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[var(--pastel-lilac)] text-sm font-semibold text-[var(--ink)] border border-[var(--stroke)]">
                Prize Management
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[var(--pastel-lilac)] text-sm font-semibold text-[var(--ink)] border border-[var(--stroke)]">
                Streaks
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[var(--pastel-lilac)] text-sm font-semibold text-[var(--ink)] border border-[var(--stroke)]">
                Level-Ups
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[var(--pastel-lilac)] text-sm font-semibold text-[var(--ink)] border border-[var(--stroke)]">
                Achievements
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

