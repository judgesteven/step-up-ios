import React from 'react';

export default function Rewards() {
  return (
    <section id="rewards">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8 lg:px-12">
        <div className="rounded-[24px] border border-[var(--stroke)] bg-white px-[40px] py-[48px]">
          {/* Section title and description */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Recognising and rewarding participation</h2>
            <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
              Step-Up is designed to create engagement through participation, recognition, and visible progress.
              When rewards are used, they are defined collaboratively with the client and tailored to the specific programme and available budget.
            </p>
          </div>
          
          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-1">
                Configurable reward formats
              </h3>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                Support a mix of rewards, including fixed prizes, raffles, and mystery boxes — allowing programmes to balance certainty, fairness, and excitement.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-1">
                Budget-aware by design
              </h3>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                Rewards are always aligned to programme budgets, with quantities, probabilities, and limits defined upfront.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-1">
                Partner and local rewards
              </h3>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                Programmes can include partner-provided or locally relevant rewards, supporting community engagement and real-world incentives.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-1">
                Fair and transparent distribution
              </h3>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                Clear eligibility rules ensure rewards are distributed consistently and fairly across individuals, teams, and campaigns.
              </p>
            </div>
          </div>
          
          {/* Dashboard screenshot */}
          <div className="space-y-3">
            <div className="flex justify-center">
              <img 
                src="/images/dashboard_image.png" 
                alt="GameLayer dashboard - prize management" 
                className="w-full max-w-4xl rounded-[16px] object-contain"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              />
            </div>
            <p className="text-sm text-[var(--muted)] text-center">
              Prize management is handled by GameLayer's admin dashboard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

