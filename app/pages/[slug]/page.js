import Link from 'next/link';
import { getAllPages, getPageBySlug } from '@/lib/content';
import { getAffiliateUrlForSlug } from '@/lib/affiliates';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllPages().map((p) => ({ slug: p.slug }));
}

export default async function ContentPage({ params }) {
  const page = getPageBySlug(params.slug);
  if (!page) return notFound();

  const productMatch = page.html.match(/https:\/\/www\.amazon\.com\/dp\/[A-Z0-9]{10}\/\?tag=[^"'\s<)]+/i);
  const ctaUrl = productMatch?.[0] || getAffiliateUrlForSlug(page.slug);

  return (
    <main className="page">
      <div className="nav">
        <Link href="/" className="pill">← Home</Link>
        <span className="pill">{page.intent}</span>
        <span className="pill">{page.primary_keyword}</span>
      </div>

      <div className="notice">
        Editorial note: We focus on real workflow fit and clear tradeoffs. As an Amazon Associate I earn from qualifying purchases.
      </div>

      <article className="container" dangerouslySetInnerHTML={{ __html: page.html }} />

      <section className="cta">
        <strong>Quick next step</strong>
        <p>Open your top 2 options side-by-side, compare recent reviews and return policy, and pick the one with fewer recurring complaints.</p>
        <a className="btn" href={ctaUrl} target="_blank" rel="nofollow sponsored noopener">Check current price on Amazon</a>
      </section>

      <footer>
        Last reviewed: {page.last_updated} · <Link href="/disclosure">Affiliate disclosure</Link>
      </footer>
    </main>
  );
}
