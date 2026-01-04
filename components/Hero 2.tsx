import Image from 'next/image'

export default function Hero() {
  const showRef = process.env.NEXT_PUBLIC_SHOW_REF === '1'

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: 'var(--page-bg)' }}>
      <div className="relative mx-auto max-w-[1400px] px-16 py-12 overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', borderRadius: '32px' }}>
        {showRef && (
          <img
            src="/images/reference.png"
            alt="Reference overlay"
            className="absolute inset-0 z-[9999] pointer-events-none"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.35
            }}
          />
        )}

        <header className="relative mb-20 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="h-5 w-5 rounded-full bg-black"></div>
            <span className="text-base font-medium tracking-tight text-black">
              EASY TRIP
            </span>
          </div>
          <nav className="flex items-center gap-10">
            <a href="#" className="text-sm font-normal text-black">
              About us
            </a>
            <a href="#" className="text-sm font-normal text-black">
              Reviews
            </a>
            <a href="#" className="text-sm font-normal text-black">
              Our blog
            </a>
          </nav>
          <button className="rounded-full border border-black bg-transparent px-6 py-2 text-sm font-normal text-black">
            Download App
          </button>
        </header>

        <div
          data-lilac-band
          className="absolute"
          style={{
            left: '64px',
            right: '64px',
            top: '268px',
            bottom: '48px',
            backgroundColor: 'var(--lilac-band)',
            zIndex: 1,
          }}
        >
          <svg
            className="absolute left-0 top-0 h-full w-full"
            viewBox="0 0 1200 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            <path
              d="M0,300 Q200,260 400,290 T800,300 T1200,300"
              stroke="var(--lilac-line)"
              strokeWidth="2.5"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M0,350 Q200,310 400,340 T800,350 T1200,350"
              stroke="var(--lilac-line)"
              strokeWidth="2.5"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M0,400 Q200,360 400,390 T800,400 T1200,400"
              stroke="var(--lilac-line)"
              strokeWidth="2.5"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </div>

        <div className="relative grid grid-cols-2 gap-16 z-10">
          <div className="relative z-10 flex flex-col justify-center py-8">
            <div className="mb-10">
              <h1 className="mb-3 text-5xl font-bold uppercase leading-[1.1] tracking-[-0.02em] text-black">
                PLAN YOUR
              </h1>
              <h1 className="text-7xl font-bold italic uppercase leading-[1.1] tracking-[-0.02em] text-black">
                ESCAPE
              </h1>
            </div>
            
            <p className="mb-10 max-w-[420px] text-base leading-[1.6] text-black">
              We have the largest selection of unique tours. Try our easy and
              quick tour selection for any request. 24-hour support is always
              happy to answer all your questions.
            </p>
            <button className="mb-20 w-fit rounded-full bg-black px-10 py-3.5 text-sm font-medium text-white">
              Get Started
            </button>
            <div className="flex items-center gap-5">
              <span className="text-sm text-black">
                The mobile app is available now
              </span>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.56-.59-2.73-1.04-3.81-1.65C2.24 15.28 0 13.26 0 10.9c0-1.3.39-2.48 1.17-3.45C3.93 2.19 7.2 1.95 9.04 3.18c.36.24.66.52.96.82.25-.25.54-.51.83-.77 2.05-1.68 4.83-1.5 6.78.01.83.65 1.39 1.5 1.39 2.51 0 .72-.26 1.39-.72 1.95-.25.3-.54.55-.85.75.22.14.43.3.62.48 1.17 1.05 1.72 2.45 1.72 4.06 0 1.83-1.13 3.57-2.95 4.47-.27.13-.56.22-.87.3zm-1.27-5.73c.16 0 .32-.05.46-.15.14-.1.25-.24.32-.4.07-.17.1-.35.08-.53-.02-.18-.08-.35-.18-.5-.1-.14-.24-.25-.4-.32-.17-.07-.35-.1-.53-.08-.18.02-.35.08-.5.18-.14.1-.25.24-.32.4-.07.17-.1.35-.08.53.02.18.08.35.18.5.1.14.24.25.4.32.17.07.35.1.53.08.18-.02.35-.08.5-.18z" />
                  </svg>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center z-10">
            <div className="relative z-10 translate-x-8">
              <Image
                src="/images/phone-mock.png"
                alt="Phone mockup"
                width={320}
                height={640}
                className="h-auto w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
