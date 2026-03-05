import Link from 'next/link';
import { getAllPages } from '@/lib/content';

const groups = [
  ['best', 'Best Of'],
  ['comparison', 'Comparisons'],
  ['alternatives', 'Alternatives'],
  ['review', 'Reviews'],
  ['guide', 'Guides'],
];

export default function HomePage() {
  const pages = getAllPages();

  return (
    <main className="wrap">
      <div className="top">
        <div className="badge">30 publish-ready pages</div>
        <div className="badge">Modern Next.js build</div>
      </div>

      <section className="hero">
        <h1>AI Writing Tools Hub</h1>
        <p>
          A modern affiliate-style content site with reviews, comparisons,
          alternatives, and practical buying guides.
        </p>
      </section>

      {groups.map(([intent, label]) => {
        const items = pages.filter((p) => p.intent === intent);
        if (!items.length) return null;
        return (
          <section key={intent}>
            <h2 className="section-title">{label}</h2>
            <div className="grid">
              {items.map((p) => (
                <Link key={p.slug} href={`/pages/${p.slug}`} className="card">
                  <h3>{p.title}</h3>
                  <p>{p.primary_keyword}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <footer>Built from /content/pages markdown source files.</footer>
    </main>
  );
}
