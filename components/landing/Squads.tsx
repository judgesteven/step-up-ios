import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';

export default function Squads() {
  const stats = [
    { label: 'Team XP', value: '8,450' },
    { label: 'Team Rank', value: '#3' },
    { label: 'Active Streak', value: '12 Days' },
  ];

  return (
    <section id="squads">
      <Container>
        <div className="grid md:grid-cols-[1.35fr_1fr] gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Movement works better together</h2>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              Step-Up is built around the idea that people are more likely to stay active when they feel part of something shared. Participants join a team — such as a workplace, department, or community group — and complete everyday activity challenges as individuals.
            </p>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              Individual progress contributes to a wider team picture, helping people see how they're doing over time, how their team is progressing, and how different teams compare across an organisation or programme.
            </p>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              Movement becomes a positive, social experience — not an individual obligation.
            </p>
            <p className="text-lg font-semibold text-[var(--ink)]">Step-Up is designed to work across a wide range of settings, including:</p>
            <ul className="space-y-2 text-lg text-[var(--ink)]">
              <li className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span>
                <span>Workplace wellbeing programmes (teams, departments, organisations)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span>
                <span>Community and local authority health initiatives</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span>
                <span>University and student wellbeing programmes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span>
                <span>Large-scale public health campaigns</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span>
                <span>Seasonal, regional, or event-based activity challenges</span>
              </li>
            </ul>
          </div>
          
          {/* Right: Image + Stats */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-end">
              <img src="/images/community_image.png" alt="Community participation" className="w-auto h-auto max-w-[352px] max-h-[660px] object-contain" />
            </div>
            
            {/* Stats pills */}
            <div className="flex justify-center md:justify-end">
              <div className="flex flex-wrap gap-4 justify-center" style={{ maxWidth: '352px' }}>
                {stats.map((stat) => (
                  <Card key={stat.label} className="px-4 py-3">
                    <div className="text-center">
                      <div className="text-xs text-[var(--muted)] mb-1">{stat.label}</div>
                      <div className="text-lg font-bold text-[var(--ink)]">{stat.value}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

