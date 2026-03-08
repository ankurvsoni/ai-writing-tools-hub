import Link from 'next/link';

const featuredGuides = [
  {
    slug: 'easter-basket-fillers-amazon',
    title: 'Best Easter Basket Fillers on Amazon',
    desc: 'Age-based picks that avoid novelty clutter and low-value bundles.',
  },
  {
    slug: 'dry-shampoo-best-amazon',
    title: 'Best Dry Shampoo on Amazon',
    desc: 'Hair-type breakdown with residue and scent tradeoffs.',
  },
  {
    slug: 'best-workout-sets-women-amazon',
    title: 'Best Workout Sets for Women on Amazon',
    desc: 'Comfort, fabric quality, and fit consistency over hype.',
  },
  {
    slug: 'best-sandals-women-amazon',
    title: 'Best Women\'s Sandals on Amazon',
    desc: 'Walking comfort and support tradeoffs by use case.',
  },
  {
    slug: 'best-vacuum-cleaners-home-amazon',
    title: 'Best Vacuum Cleaners for Home on Amazon',
    desc: 'Choose by floor type, pet hair load, and storage reality.',
  },
  {
    slug: 'needoh-nice-cube-worth-it',
    title: 'NeeDoh Nice Cube: Is It Worth It?',
    desc: 'Trend review with quality and value tradeoffs.',
  },
  {
    slug: 'best-dresses-for-women-amazon',
    title: 'Best Dresses for Women on Amazon',
    desc: 'Occasion-based picks with fit and fabric checks.',
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
