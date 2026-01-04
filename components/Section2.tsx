export default function Section2({ traceMode }: { traceMode?: boolean }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '464px',
          left: '0px',
          width: '1120px',
          height: '60px',
          border: traceMode ? '2px solid cyan' : 'none',
          backgroundColor: traceMode ? 'rgba(0,255,255,0.1)' : 'transparent',
          display: 'flex',
          gap: '60px',
          zIndex: 10
        }}
      >
        {traceMode && (
          <div style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '12px', color: 'cyan', fontWeight: 'bold' }}>
            STATS ROW
          </div>
        )}
        {!traceMode && (
          <>
            <div style={{ flex: '1' }}>
              <div style={{ fontSize: '40px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>1K+</div>
              <div style={{ fontSize: '13px', color: 'var(--ink)', opacity: 0.6 }}>Tours</div>
            </div>
            <div style={{ flex: '1' }}>
              <div style={{ fontSize: '40px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>10K+</div>
              <div style={{ fontSize: '13px', color: 'var(--ink)', opacity: 0.6 }}>Travelers</div>
            </div>
            <div style={{ flex: '1' }}>
              <div style={{ fontSize: '40px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>4.8+</div>
              <div style={{ fontSize: '13px', color: 'var(--ink)', opacity: 0.6 }}>Rating</div>
            </div>
          </>
        )}
      </div>
      
      <div
        style={{
          position: 'absolute',
          top: '578px',
          left: '0px',
          width: '600px',
          height: '200px',
          border: traceMode ? '2px solid magenta' : 'none',
          backgroundColor: traceMode ? 'rgba(255,0,255,0.1)' : 'transparent',
          zIndex: 10
        }}
      >
        {traceMode && (
          <div style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '12px', color: 'magenta', fontWeight: 'bold' }}>
            SECTION 2 HEADING
          </div>
        )}
        {!traceMode && (
          <>
            <h2 style={{ fontSize: '48px', fontWeight: 700, lineHeight: '1.2', color: 'var(--ink)', marginBottom: '16px', margin: '0 0 16px 0' }}>
              Discover amazing tours around the world
            </h2>
            <p style={{ fontSize: '18px', fontStyle: 'italic', color: 'var(--ink)', opacity: 0.7, marginBottom: '24px', margin: '0 0 24px 0' }}>
              Explore unique destinations with our curated selection of tours
            </p>
            <button
              style={{
                borderRadius: '24px',
                backgroundColor: 'var(--ink)',
                color: '#FFFFFF',
                padding: '14px 40px',
                fontSize: '14px',
                fontWeight: 500,
                width: 'fit-content',
                cursor: 'pointer',
                border: 'none'
              }}
            >
              Explore Tours
            </button>
          </>
        )}
      </div>
      
      <div
        style={{
          position: 'absolute',
          top: '578px',
          right: '0px',
          width: '400px',
          height: '600px',
          border: traceMode ? '2px solid yellow' : 'none',
          backgroundColor: traceMode ? 'rgba(255,255,0,0.1)' : '#D0D0D0',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '14px',
          zIndex: 10
        }}
      >
        {traceMode && (
          <div style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '12px', color: 'yellow', fontWeight: 'bold' }}>
            PHONES TOURS
          </div>
        )}
        {!traceMode && 'Phones Tours'}
      </div>
    </>
  )
}
