export default function Hero({ traceMode }: { traceMode?: boolean }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '165px',
          left: '0px',
          width: '1120px',
          height: '235px',
          border: traceMode ? '2px solid blue' : 'none',
          backgroundColor: traceMode ? 'rgba(0,0,255,0.1)' : 'var(--hero-lilac)',
          borderRadius: '18px',
          zIndex: 0
        }}
      >
        {traceMode && (
          <div style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '12px', color: 'blue', fontWeight: 'bold' }}>
            HERO BAND
          </div>
        )}
        {!traceMode && (
          <svg
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1
            }}
            viewBox="0 0 1120 235"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,117 Q280,90 560,110 T1120,117"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,140 Q280,113 560,133 T1120,140"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,163 Q280,136 560,156 T1120,163"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        )}
      </div>
      
      <div
        style={{
          position: 'absolute',
          top: '34px',
          left: '32px',
          width: '420px',
          height: '56px',
          border: traceMode ? '2px solid green' : 'none',
          backgroundColor: traceMode ? 'rgba(0,255,0,0.1)' : 'transparent',
          zIndex: 2
        }}
      >
        {traceMode && (
          <div style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '12px', color: 'green', fontWeight: 'bold' }}>
            HEADING
          </div>
        )}
        {!traceMode && (
          <>
            <h1 style={{ fontSize: '56px', fontWeight: 800, lineHeight: '56px', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 0 0', textTransform: 'uppercase' }}>
              PLAN YOUR
            </h1>
            <h1 style={{ fontSize: '56px', fontWeight: 300, fontStyle: 'italic', lineHeight: '56px', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 0 0', textTransform: 'uppercase' }}>
              ESCAPE
            </h1>
          </>
        )}
      </div>
      
      <div
        style={{
          position: 'absolute',
          top: '191px',
          left: '32px',
          width: '420px',
          height: '180px',
          border: traceMode ? '2px solid orange' : 'none',
          backgroundColor: traceMode ? 'rgba(255,165,0,0.1)' : 'transparent',
          zIndex: 3
        }}
      >
        {traceMode && (
          <div style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '12px', color: 'orange', fontWeight: 'bold' }}>
            CONTENT
          </div>
        )}
        {!traceMode && (
          <>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--ink)', opacity: 0.7, marginBottom: '24px', maxWidth: '420px', margin: '0 0 24px 0' }}>
              We have the largest selection of unique tours. Try our easy and quick tour selection for any request. 24-hour support is always happy to answer all your questions.
            </p>
            <button
              style={{
                borderRadius: '24px',
                backgroundColor: 'var(--ink)',
                color: '#FFFFFF',
                padding: '14px 40px',
                fontSize: '14px',
                fontWeight: 500,
                marginBottom: '32px',
                width: 'fit-content',
                cursor: 'pointer',
                border: 'none',
                margin: '0 0 32px 0'
              }}
            >
              Get Started
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '13px', color: 'var(--ink)', opacity: 0.6 }}>
                The mobile app is available now
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.56-.59-2.73-1.04-3.81-1.65C2.24 15.28 0 13.26 0 10.9c0-1.3.39-2.48 1.17-3.45C3.93 2.19 7.2 1.95 9.04 3.18c.36.24.66.52.96.82.25-.25.54-.51.83-.77 2.05-1.68 4.83-1.5 6.78.01.83.65 1.39 1.5 1.39 2.51 0 .72-.26 1.39-.72 1.95-.25.3-.54.55-.85.75.22.14.43.3.62.48 1.17 1.05 1.72 2.45 1.72 4.06 0 1.83-1.13 3.57-2.95 4.47-.27.13-.56.22-.87.3zm-1.27-5.73c.16 0 .32-.05.46-.15.14-.1.25-.24.32-.4.07-.17.1-.35.08-.53-.02-.18-.08-.35-.18-.5-.1-.14-.24-.25-.4-.32-.17-.07-.35-.1-.53-.08-.18.02-.35.08-.5.18-.14.1-.25.24-.32.4-.07.17-.1.35-.08.53.02.18.08.35.18.5.1.14.24.25.4.32.17.07.35.1.53.08.18-.02.35-.08.5-.18z" />
                  </svg>
                </div>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      
      <div
        style={{
          position: 'absolute',
          right: '70px',
          top: '58px',
          width: '260px',
          height: '520px',
          border: traceMode ? '2px solid purple' : 'none',
          backgroundColor: traceMode ? 'rgba(128,0,128,0.1)' : '#D0D0D0',
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '14px',
          boxShadow: traceMode ? 'none' : '0 4px 12px rgba(0,0,0,0.1)',
          zIndex: 5
        }}
      >
        {traceMode && (
          <div style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '12px', color: 'purple', fontWeight: 'bold' }}>
            PHONE
          </div>
        )}
        {!traceMode && 'Phone Hero'}
      </div>
    </>
  )
}
