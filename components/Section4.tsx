export default function Section4({ traceMode }: { traceMode?: boolean }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '1720px',
          left: '0px',
          width: '1120px',
          height: '80px',
          border: traceMode ? '2px solid teal' : 'none',
          backgroundColor: traceMode ? 'rgba(0,128,128,0.1)' : 'transparent',
          display: 'flex',
          gap: '80px',
          zIndex: 10
        }}
      >
        {traceMode && (
          <div style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '12px', color: 'teal', fontWeight: 'bold' }}>
            WHY US HEADING
          </div>
        )}
        {!traceMode && (
          <>
            <div style={{ flex: '1' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 700, lineHeight: '1.2', color: 'var(--ink)', margin: '0' }}>
                Why travelers choose us
              </h2>
            </div>
            <div style={{ flex: '1' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px', margin: '0 0 12px 0' }}>
                We are the top mobile travel apps
              </h3>
              <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--ink)', opacity: 0.6, margin: '0' }}>
                We provide exceptional service and unforgettable experiences for every journey.
              </p>
            </div>
          </>
        )}
      </div>
      
      <div
        style={{
          position: 'absolute',
          top: '1840px',
          left: '0px',
          width: '1120px',
          height: '200px',
          border: traceMode ? '2px solid coral' : 'none',
          backgroundColor: traceMode ? 'rgba(255,127,80,0.1)' : 'transparent',
          display: 'flex',
          gap: '24px',
          zIndex: 10
        }}
      >
        {traceMode && (
          <div style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '12px', color: 'coral', fontWeight: 'bold' }}>
            WHY US CARDS
          </div>
        )}
        {!traceMode && (
          <>
            <div
              style={{
                flex: '1',
                borderRadius: '16px',
                padding: '32px',
                backgroundColor: 'var(--card-beige)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#F5E8D8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', margin: '0 0 8px 0' }}>
                24/7 Support
              </h4>
              <p style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--ink)', opacity: 0.6, margin: '0' }}>
                Round-the-clock assistance whenever you need help
              </p>
            </div>
            
            <div
              style={{
                flex: '1',
                borderRadius: '16px',
                padding: '32px',
                backgroundColor: 'var(--card-green)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#D8F5D8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', margin: '0 0 8px 0' }}>
                Verified Tours
              </h4>
              <p style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--ink)', opacity: 0.6, margin: '0' }}>
                All tours are carefully vetted for quality and safety
              </p>
            </div>
            
            <div
              style={{
                flex: '1',
                borderRadius: '16px',
                padding: '32px',
                backgroundColor: 'var(--card-lilac)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#E8D8F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', margin: '0 0 8px 0' }}>
                Best Prices
              </h4>
              <p style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--ink)', opacity: 0.6, margin: '0' }}>
                Competitive rates with no hidden fees or surprises
              </p>
            </div>
          </>
        )}
      </div>
    </>
  )
}
