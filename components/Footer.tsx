import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        First<span>Cloud</span> Solutions
      </div>
      <div className={styles.mid}>
        © {new Date().getFullYear()} First Cloud Solutions · Joseph Caxton-Idowu
      </div>
      <div className={styles.links}>
        <Link href="/#services">Services</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
        <a href="https://linkedin.com/in/josephcaxton" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
