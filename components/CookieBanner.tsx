'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 3rem)',
      maxWidth: '860px',
      background: 'var(--ink)',
      color: 'var(--white)',
      padding: '1rem 1.5rem',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.5rem',
      flexWrap: 'wrap',
      zIndex: 9999,
      boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
    }}>
      <p style={{
        fontSize: '0.85rem',
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.8)',
        margin: 0,
        flex: 1,
        minWidth: '200px',
      }}>
        We use cookies to ensure you get the best experience on our website.{' '}
        <Link href="/privacy" style={{ color: 'var(--white)', textDecoration: 'underline' }}>
          Privacy policy
        </Link>
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
        <button onClick={accept} style={{
          background: 'var(--accent)',
          color: 'var(--white)',
          border: 'none',
          padding: '0.5rem 1.25rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.85rem',
          fontWeight: 500,
          cursor: 'pointer',
        }}>
          Accept
        </button>
        <button onClick={decline} style={{
          background: 'transparent',
          color: 'var(--white)',
          border: '1px solid rgba(255,255,255,0.3)',
          padding: '0.5rem 1.25rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.85rem',
          fontWeight: 500,
          cursor: 'pointer',
        }}>
          Decline
        </button>
      </div>
    </div>
  )
}