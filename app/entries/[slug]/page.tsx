import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/app/entries/[slug]/page.module.css";
import { ContentBlock, getAllEntries, getEntryBySlug } from "@/lib/journalData";

interface EntryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllEntries().map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: EntryPageProps): Metadata {
  const entry = getEntryBySlug(params.slug);

  if (!entry) {
    return { title: "Journal entry not found" };
  }

  return {
    title: `${entry.title} · Personal Journal`,
    description: entry.summary,
    openGraph: {
      title: entry.title,
      description: entry.summary
    },
    twitter: {
      title: entry.title,
      description: entry.summary
    }
  };
}

export default function EntryPage({ params }: EntryPageProps) {
  const entry = getEntryBySlug(params.slug);

  if (!entry) {
    notFound();
  }

  return (
    <article className={styles.page}>
      <div className={styles.metaSurface} style={{ background: entry.theme.gradient }} aria-hidden />
      <header className={`${styles.header} glass-surface`}>
        <div>
          <Link href="/" className={styles.backLink}>
            ← Back to journal
          </Link>
          <h1>{entry.title}</h1>
          <p className={styles.summary}>{entry.summary}</p>
        </div>
        <dl className={styles.metaGrid}>
          <div>
            <dt>Published</dt>
            <dd>{entry.formattedDate}</dd>
          </div>
          <div>
            <dt>Reading Time</dt>
            <dd>{entry.readingTime}</dd>
          </div>
          <div>
            <dt>Mood</dt>
            <dd>{entry.mood}</dd>
          </div>
          {entry.location ? (
            <div>
              <dt>Location</dt>
              <dd>{entry.location}</dd>
            </div>
          ) : null}
        </dl>
      </header>

      <div className={`${styles.content} glass-surface`}>
        {entry.content.map((block, index) => (
          <ContentBlockRenderer key={index} block={block} />
        ))}
      </div>

      <aside className={styles.takeaway}>
        <div className={`${styles.takeawayCard} glass-surface`}>
          <span className="chip">Key takeaway</span>
          <p>{entry.takeaway}</p>
          <div className={styles.tags}>
            {entry.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
      </aside>
    </article>
  );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return <h2 className={styles.contentHeading}>{block.text}</h2>;
    case "paragraph":
      return <p>{block.text}</p>;
    case "quote":
      return (
        <figure className={styles.quote}>
          <blockquote>{block.text}</blockquote>
          {block.source ? <figcaption>{block.source}</figcaption> : null}
        </figure>
      );
    case "list":
      return (
        <div className={styles.listBlock}>
          {block.label ? <p className={styles.listLabel}>{block.label}</p> : null}
          <ul>
            {block.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "callout":
      return <div className={styles.callout}>{block.text}</div>;
    default:
      return null;
  }
}
