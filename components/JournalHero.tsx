import styles from "@/components/JournalHero.module.css";
import Link from "next/link";

export function JournalHero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.content}>
        <span className="chip">Journal // in progress</span>
        <h1>Tracing the edges of a curious life.</h1>
        <p>
          I started this digital journal to slow down, pay attention, and savour the small transitions between
          everyday moments. Here you can follow the experiments, detours, and rituals that keep me grounded while I
          chase audacious ideas.
        </p>
        <div className={styles.actions}>
          <Link href="#entries" className={styles.primaryAction}>
            Read the latest entries
          </Link>
          <Link href="#timeline" className={styles.secondaryAction}>
            Explore the yearly timeline
          </Link>
        </div>
      </div>
      <div className={styles.panel}>
        <div className={styles.panelCard}>
          <div>
            <p className={styles.panelHeading}>Currently</p>
            <ul>
              <li>
                <span className={styles.label}>Location</span>
                <span>Lisbon, Portugal</span>
              </li>
              <li>
                <span className={styles.label}>Focus</span>
                <span>Designing playful learning tools</span>
              </li>
              <li>
                <span className={styles.label}>Listening</span>
                <span>Lo-fi sketches & deep ambient</span>
              </li>
              <li>
                <span className={styles.label}>Learning</span>
                <span>Analog collage & creative coding</span>
              </li>
            </ul>
          </div>
          <div className={styles.badge}>Season 04 · Renewal</div>
        </div>
      </div>
    </section>
  );
}
