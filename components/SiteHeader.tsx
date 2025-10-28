"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/SiteHeader.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "Entries", href: "/#entries" },
  { label: "Timeline", href: "/#timeline" },
  { label: "About", href: "/#about" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <div className={styles.dot} aria-hidden />
        <span className={styles.title}>
          <Link href="/">My Journal</Link>
        </span>
        <span className={styles.subtitle}>Quiet reflections & bold experiments</span>
      </div>
      <nav className={styles.nav} aria-label="Primary navigation">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link key={link.href} href={link.href} className={isActive ? styles.activeLink : styles.link}>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <Link href="#newsletter" className={styles.cta}>
        <span>Stay in the loop</span>
        <svg viewBox="0 0 24 24" aria-hidden className={styles.ctaIcon}>
          <path d="M5 12h12m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </header>
  );
}
