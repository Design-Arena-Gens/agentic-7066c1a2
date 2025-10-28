import Link from "next/link";
import { JournalEntry } from "@/lib/journalData";
import styles from "@/components/FeaturedEntry.module.css";

interface FeaturedEntryProps {
  entry: JournalEntry;
}

export function FeaturedEntry({ entry }: FeaturedEntryProps) {
  return (
    <article className={`${styles.card} glass-surface`}>
      <div className={styles.headerSurface} style={{ background: entry.theme.gradient }} aria-hidden />
      <div className={styles.content}>
        <span className="chip">Featured entry</span>
        <h2>{entry.title}</h2>
        <p className={styles.summary}>{entry.summary}</p>
        <div className={styles.meta}>
          <div>
            <span className={styles.label}>Published</span>
            <span>{entry.formattedDate}</span>
          </div>
          <div>
            <span className={styles.label}>Mood</span>
            <span>{entry.mood}</span>
          </div>
          <div>
            <span className={styles.label}>Reading time</span>
            <span>{entry.readingTime}</span>
          </div>
          {entry.location ? (
            <div>
              <span className={styles.label}>Location</span>
              <span>{entry.location}</span>
            </div>
          ) : null}
        </div>
        <div className={styles.tags}>
          {entry.tags.slice(0, 4).map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <div className={styles.actions}>
          <Link href={`/entries/${entry.slug}`} className={styles.primaryAction}>
            Read story
          </Link>
          <Link href="#timeline" className={styles.secondaryAction}>
            Jump to timeline
          </Link>
        </div>
      </div>
    </article>
  );
}
