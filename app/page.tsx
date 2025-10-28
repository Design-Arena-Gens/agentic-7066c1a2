import { JournalHero } from "@/components/JournalHero";
import { FeaturedEntry } from "@/components/FeaturedEntry";
import { EntryCard } from "@/components/EntryCard";
import { Timeline } from "@/components/Timeline";
import { NewsletterInvite } from "@/components/NewsletterInvite";
import { getFeaturedEntry, getRecentEntries, groupEntriesByYear } from "@/lib/journalData";
import styles from "@/app/page.module.css";

export default function HomePage() {
  const featured = getFeaturedEntry();
  const recent = getRecentEntries(3);
  const timeline = groupEntriesByYear();

  return (
    <div className={styles.page}>
      <JournalHero />

      <section id="entries" className={styles.featuredSection}>
        <FeaturedEntry entry={featured} />
      </section>

      <section className={styles.recentSection} aria-labelledby="recent-heading">
        <header className={styles.recentHeader}>
          <div>
            <span className="chip">Fresh pages</span>
            <h2 id="recent-heading" className="section-heading">
              Latest entries
            </h2>
          </div>
          <p className="section-subtitle">
            Dispatches from experiments in mindful living, playful creativity, and the micro rituals that build momentum.
          </p>
        </header>
        <div className={styles.entriesGrid}>
          {recent.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>

      <Timeline entriesByYear={timeline} />

      <NewsletterInvite />
    </div>
  );
}
