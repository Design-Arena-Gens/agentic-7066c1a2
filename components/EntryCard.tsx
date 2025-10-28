import Link from "next/link";
import { JournalEntry } from "@/lib/journalData";
import styles from "@/components/EntryCard.module.css";

interface EntryCardProps {
  entry: JournalEntry;
}

export function EntryCard({ entry }: EntryCardProps) {
  return (
    <article className={`${styles.card} glass-surface`}>
      <div className={styles.gradient} style={{ background: entry.theme.gradient }} aria-hidden />
      <div className={styles.body}>
        <div className={styles.meta}>
          <span>{entry.formattedDate}</span>
          <span aria-hidden>•</span>
          <span>{entry.readingTime}</span>
        </div>
        <h3>{entry.title}</h3>
        <p>{entry.summary}</p>
        <div className={styles.tags}>
          {entry.tags.slice(0, 3).map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <Link href={`/entries/${entry.slug}`} className={styles.link}>
          Continue reading
          <svg viewBox="0 0 24 24" aria-hidden>
            <path
              d="M5 12h12m0 0-4-4m4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
