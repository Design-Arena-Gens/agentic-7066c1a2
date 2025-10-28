import styles from "@/components/SiteFooter.module.css";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.title}>Personal Journal</p>
        <p className={styles.caption}>Documenting the art of deliberate living since 2021.</p>
      </div>
      <div className={styles.links}>
        <Link href="mailto:hello@journal.space">Say hello</Link>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://www.notion.so" target="_blank" rel="noreferrer">
          Notion Hub
        </a>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Personal Journal. Crafted with intention.
      </p>
    </footer>
  );
}
