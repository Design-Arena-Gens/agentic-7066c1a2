import Link from "next/link";
import styles from "@/app/not-found.module.css";

export default function NotFound() {
  return (
    <div className={`${styles.container} glass-surface`}>
      <span className="chip">404</span>
      <h1>Lost in the margins</h1>
      <p>The page you were looking for slipped between the notebook pages. Let&apos;s guide you back to the journal.</p>
      <Link href="/" className={styles.link}>
        Return home
      </Link>
    </div>
  );
}
