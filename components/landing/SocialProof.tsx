import React from 'react';
import Container from '../ui/Container';

export default function SocialProof() {
  return (
    <section className="py-10 border-y border-[var(--stroke)] bg-[var(--surface)]">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm font-semibold text-[var(--ink)]">
            Built on GameLayer's gamification platform
          </p>
          <p className="text-xs text-[var(--muted)]">
            Designed to support small communities through to nationwide wellbeing initiatives.
          </p>
          <p className="text-xs text-[var(--muted)]">
            Missions · XP · Leaderboards · Rewards · Teams · Streaks
          </p>
        </div>
      </Container>
    </section>
  );
}

