export default function Section3({ traceMode }: { traceMode?: boolean }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '1200px',
          left: '0px',
          width: '1120px',
          height: '300px',
          border: traceMode ? '2px solid lime' : 'none',
          backgroundColor: traceMode ? 'rgba(0,255,0,0.1)' : 'transparent',
          display: 'flex',
          gap: '60px',
          zIndex: 10
        }}
      >
        {traceMode && (
          <div style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '12px', color: 'lime', fontWeight: 'bold' }}>
            COMMUNITY TOP ROW
          </div>
        )}
        {!traceMode && (
          <>
            <div style={{ flex: '1' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 700, lineHeight: '1.2', color: 'var(--ink)', marginBottom: '16px', margin: '0 0 16px 0' }}>
                Join our travel community
              </h2>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--ink)', opacity: 0.7, marginBottom: '24px', margin: '0 0 24px 0' }}>
                Connect with fellow travelers, share experiences, and discover new destinations together.
              </p>
              <button
                style={{
                  borderRadius: '24px',
                  backgroundColor: 'var(--ink)',
                  color: '#FFFFFF',
                  padding: '12px 32px',
                  fontSize: '14px',
                  fontWeight: 500,
                  width: 'fit-content',
                  cursor: 'pointer',
                  border: 'none'
                }}
              >
                Join Now
              </button>
            </div>
            <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '280px', height: '560px', backgroundColor: '#D0D0D0', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '14px' }}>
                Phone Community
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px', margin: '0 0 12px 0' }}>
                The best experience in travel
              </h3>
              <p style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--ink)', opacity: 0.6, marginBottom: '24px', margin: '0 0 24px 0' }}>
                Upload photos and stories from your adventures
              </p>
              <div style={{ display: 'flex', gap: '0' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: `rgb(${180 + i * 20}, ${180 + i * 20}, ${180 + i * 20})`,
                      border: '2px solid #FFFFFF',
                      marginLeft: i > 1 ? '-12px' : '0'
                    }}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      
      <div
        style={{
          position: 'absolute',
          top: '1540px',
          left: '0px',
          width: '1120px',
          height: '128px',
          border: traceMode ? '2px solid pink' : 'none',
          backgroundColor: traceMode ? 'rgba(255,192,203,0.1)' : 'transparent',
          display: 'flex',
          gap: '16px',
          zIndex: 10
        }}
      >
        {traceMode && (
          <div style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '12px', color: 'pink', fontWeight: 'bold' }}>
            DESTINATION CARDS
          </div>
        )}
        {!traceMode && (
          <>
            {['Paris', 'Tokyo', 'Bali', 'New York'].map((city, i) => (
              <div
                key={city}
                style={{
                  flex: '1',
                  height: '128px',
                  borderRadius: '12px',
                  backgroundColor: `rgb(${200 + i * 15}, ${200 + i * 15}, ${200 + i * 15})`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  {city}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}
