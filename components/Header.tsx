export default function Header({ traceMode }: { traceMode?: boolean }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '48px',
        left: '0px',
        width: '1120px',
        height: '64px',
        border: traceMode ? '2px solid red' : 'none',
        backgroundColor: traceMode ? 'rgba(255,0,0,0.1)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: traceMode ? '0' : '0',
        paddingRight: traceMode ? '0' : '0',
        zIndex: 20
      }}
    >
      {traceMode && (
        <div style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '12px', color: 'red', fontWeight: 'bold' }}>
          HEADER
        </div>
      )}
      {!traceMode && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--ink)' }}></div>
            <span style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.5px', color: 'var(--ink)' }}>
              EASY TRIP
            </span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <a href="#" style={{ fontSize: '13px', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none' }}>
              About us
            </a>
            <a href="#" style={{ fontSize: '13px', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none' }}>
              Reviews
            </a>
            <a href="#" style={{ fontSize: '13px', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none' }}>
              Our blog
            </a>
          </nav>
          <button
            style={{
              borderRadius: '24px',
              border: '1px solid var(--ink)',
              backgroundColor: 'transparent',
              padding: '8px 24px',
              fontSize: '13px',
              fontWeight: 400,
              color: 'var(--ink)',
              cursor: 'pointer'
            }}
          >
            Download App
          </button>
        </>
      )}
    </div>
  )
}
