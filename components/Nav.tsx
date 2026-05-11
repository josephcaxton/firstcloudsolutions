'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        First<span>Cloud</span> Solutions
      </Link>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <li><Link href="/#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link href="/#approach" onClick={() => setMenuOpen(false)}>Approach</Link></li>
        <li>
          <Link href="/#contact" className={styles.cta} onClick={() => setMenuOpen(false)}>
            Get in touch
          </Link>
        </li>
      </ul>

      <button
        className={styles.burger}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
