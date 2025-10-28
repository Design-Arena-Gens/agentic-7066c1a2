import styles from "@/components/NewsletterInvite.module.css";

export function NewsletterInvite() {
  return (
    <section className={`${styles.section} glass-surface`} id="newsletter">
      <div className={styles.copy}>
        <span className="chip">Letters from the studio</span>
        <h2>Monthly field notes delivered with care.</h2>
        <p>
          Subscribe to receive a slow digest of sketches, systems experiments, and the playlists that keep me company
          while I build. No noise—just a thoughtful dispatch once a month.
        </p>
      </div>
      <form className={styles.form}>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input id="email" type="email" placeholder="you@email.com" required />
        <button type="submit">Join the letter</button>
      </form>
    </section>
  );
}
