import Link from 'next/link';

const featuredGuides = [
  {
    slug: 'best-standing-desk-solopreneurs',
    title: 'Best Standing Desk for Solopreneurs',
    desc: 'Stability, depth, and budget tradeoffs before you buy.',
  },
  {
    slug: 'desk-setup-under-500-solopreneurs',
    title: 'Desk Setup Under $500',
    desc: 'A practical starter setup focused on comfort-per-dollar.',
  },
  {
    slug: 'best-ergonomic-chair-under-500-solopreneurs',
    title: 'Best Ergonomic Chair Under $500',
    desc: 'Fit checks, durability signals, and skip conditions.',
  },
  {
    slug: 'monitor-arm-vs-monitor-riser-solopreneurs',
    title: 'Monitor Arm vs Monitor Riser',
    desc: 'Which one actually fixes neck strain on small desks.',
  },
  {
    slug: 'best-cable-management-kits-desk',
    title: 'Best Cable Management Kits',
    desc: 'Low-friction cable cleanup methods that hold up over time.',
  },
  {
    slug: 'best-desk-accessories-actually-useful',
    title: 'Desk Accessories That Are Actually Useful',
    desc: 'No fluff: only accessories that remove daily friction.',
  },
];

export default function HomePage() {
  return (
    <main className="wrap">
      <div className="top">
        <div className="badge">Affiliate Content Hub</div>
        <div className="badge">reviews.orkolabs.com</div>
      </div>

      <section className="hero">
        <h1>Product Reviews & Buying Guides</h1>
        <p>
          Practical affiliate content focused on real tradeoffs, budget tiers,
          and clear recommendations for solopreneurs.
        </p>
      </section>

      <section>
        <h2 className="section-title">Featured Guides</h2>
        <div className="grid">
          {featuredGuides.map((g) => (
            <Link key={g.slug} className="card" href={`/pages/${g.slug}`}>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Editorial Promise</h2>
        <div className="notice">
          We include clear pros/cons, “who should skip this,” common mistakes,
          and budget recommendations in every guide.
        </div>
      </section>

      <footer>
        Affiliate disclosure in every post · <Link href="/editorial-policy">Editorial policy</Link> ·{' '}
        <Link href="/disclosure">Disclosure</Link>
      </footer>
    </main>
  );
}
