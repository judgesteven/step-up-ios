import type { Metadata } from 'next'
import './globals.css'

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://stepup.gamelayer.io').replace(/\/$/, '')

const baseMetadata: Metadata = {
  title: 'Step-Up | Public health and workplace wellbeing programmes powered by GameLayer',
  description: 'Step-Up helps organisations run inclusive, low-pressure walking programmes with daily and weekly challenges, progression, and optional rewards. Built for workplaces, universities, local authorities, and public health programmes.',
  applicationName: 'Step-Up',
  generator: 'Next.js',
  keywords: [
    'employee wellness programme',
    'workplace wellbeing',
    'public health programme',
    'walking challenge app for organisations',
    'step count challenges',
    'NHS wellbeing programme',
    'university wellbeing',
    'local authority health initiative',
    'behaviour change',
    'habit formation',
    'gamification for wellbeing',
    'team challenges',
    'organisational rewards',
    'GameLayer',
    'Step-Up',
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/images/favicon.png',
  },
  themeColor: '#635BFF',
  other: {
    referrer: 'strict-origin-when-cross-origin',
    'format-detection': 'telephone=no',
  },
}

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    type: 'website',
    siteName: 'Step-Up',
    title: 'Step-Up | Public health and workplace wellbeing programmes powered by GameLayer',
    description: 'Step-Up helps organisations run community-driven walking programmes with team-based engagement, recognition, and rewards. Designed for public health initiatives, workplaces, universities, and local authorities to encourage everyday movement through inclusive, low-pressure challenges.',
    url: `${siteUrl}/`,
    images: [
      {
        url: `${siteUrl}/images/step-up_social.png`,
        width: 1200,
        height: 630,
        alt: 'Step-Up - Public health and workplace wellbeing programmes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Step-Up | Public health and workplace wellbeing programmes powered by GameLayer',
    description: 'Step-Up helps organisations run community-driven walking programmes with team-based engagement, recognition, and rewards. Designed for public health initiatives, workplaces, universities, and local authorities to encourage everyday movement through inclusive, low-pressure challenges.',
    images: [`${siteUrl}/images/step-up_social.png`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqData = [
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
  ]

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Step-Up',
    url: `${siteUrl}/`,
    publisher: {
      '@type': 'Organization',
      name: 'GameLayer',
      url: 'https://gamelayer.io/',
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GameLayer',
    url: 'https://gamelayer.io/',
    logo: `${siteUrl}/images/gamelayer_logo.png`,
    foundingLocation: 'Finland',
  }

  const softwareApplicationSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Step-Up',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS',
    description: 'Step-Up helps organisations run inclusive walking programmes with daily and weekly challenges, progression, and optional rewards.',
    url: `${siteUrl}/`,
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'EUR',
      category: 'subscription',
      availability: 'https://schema.org/InStock',
    },
    publisher: {
      '@type': 'Organization',
      name: 'GameLayer',
      url: 'https://gamelayer.io/',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
