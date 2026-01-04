import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Are the daily challenges the same for everyone?',
      answer: 'Yes. Everyone within the same programme receives the same challenges. Typically, there are two challenges per day — one easier and one more demanding — as well as weekly challenges. All challenges are randomised, so participants see fresh, unique challenges each day.',
    },
    {
      question: 'Is Step-Up suitable for all ages and abilities?',
      answer: 'Yes. Step-Up focuses on everyday movement, measured through step count, rather than fitness performance or intensity. This makes it suitable for a broad range of ages and abilities.',
    },
    {
      question: 'Is this only for workplaces?',
      answer: 'No. Step-Up can be used by workplaces, local authorities, universities, community organisations, and public health programmes.',
    },
    {
      question: 'What data does Step-Up collect?',
      answer: 'Step-Up only collects the data required to support the programme and track activity. Participants must explicitly grant permission to connect their device in order to read step count data. Data handling and privacy can be aligned with organisational and public-sector requirements.',
    },
    {
      question: 'How much does Step-Up cost?',
      answer: 'Pricing depends on the number of participants and the level of bespoke content or configuration required. As an example, a small organisation using a standard version of Step-Up would typically pay around €99 per month, with discounts available for annual upfront commitments.',
    },
    {
      question: 'How do I get started?',
      answer: 'Fill out the form below with as much detail as you can about your organisation and programme. We aim to respond within 24 hours to discuss your goals, scope, and the next steps for setting up Step-Up.',
    },
  ];

  return (
    <section id="faq">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8 lg:px-12">
        <div className="rounded-[24px] border border-[var(--stroke)] bg-white px-[40px] py-[48px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Answers to common questions about how Step-Up works and how organisations can get started.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-[var(--stroke)] p-6 cursor-pointer"
              >
                <summary className="font-semibold text-lg list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-[var(--muted)] group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-4 text-base text-[var(--muted)] leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

