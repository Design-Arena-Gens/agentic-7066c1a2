import Link from "next/link";
import { type JournalEntry } from "@/lib/journalData";
import styles from "@/components/Timeline.module.css";

interface TimelineProps {
  entriesByYear: Array<{
    year: string;
    entries: JournalEntry[];
  }>;
}

export function Timeline({ entriesByYear }: TimelineProps) {
  return (
    <section id="timeline" className={styles.timelineSection}>
      <div className={styles.header}>
        <span className="chip">Archive</span>
        <h2 className="section-heading">Journey timeline</h2>
        <p className="section-subtitle">
          A living map of seasons, creative residencies, and small everyday shifts. Follow the threads to revisit the
          moments that shaped the year.
        </p>
      </div>
      <div className={styles.grid}>
        {entriesByYear.map((group) => (
          <div key={group.year} className={styles.column}>
            <div className={styles.yearMarker}>{group.year}</div>
            <ol>
              {group.entries.map((entry) => (
                <li key={entry.slug}>
                  <div className={styles.card}>
                    <div className={styles.cardAccent} style={{ background: entry.theme.gradient }} aria-hidden />
                    <div className={styles.cardContent}>
                      <time dateTime={entry.publishedAt}>{entry.formattedDate}</time>
                      <h3>{entry.title}</h3>
                      <p>{entry.summary}</p>
                      <Link href={`/entries/${entry.slug}`}>Open entry</Link>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
