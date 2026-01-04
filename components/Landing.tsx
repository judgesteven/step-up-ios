'use client'

import { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

export default function Landing() {
  const traceMode = process.env.NEXT_PUBLIC_TRACE === '1'
  const [imageHeight, setImageHeight] = useState(2000)

  useEffect(() => {
    const img = new Image()
    img.src = '/images/reference.png'
    img.onload = () => {
      setImageHeight(img.height)
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--page-bg)', padding: '40px 0' }}>
      <div
        style={{
          width: '1200px',
          margin: '0 auto',
          backgroundColor: 'var(--container-bg)',
          borderRadius: '24px',
          border: '1px solid var(--stroke)',
          padding: '24px',
          minHeight: imageHeight,
          position: 'relative',
          backgroundImage: 'url(/images/reference.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: '1200px auto'
        }}
      >
        <div style={{ width: '1120px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <Header traceMode={traceMode} />
          <Hero traceMode={traceMode} />
          <Section2 traceMode={traceMode} />
          <Section3 traceMode={traceMode} />
          <Section4 traceMode={traceMode} />
        </div>
      </div>
    </div>
  )
}
