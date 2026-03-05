import Link from 'next/link';
import { getAllPages, getPageBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllPages().map((p) => ({ slug: p.slug }));
}

export default async function ContentPage({ params }) {
  const page = getPageBySlug(params.slug);
  if (!page) return notFound();

  return (
    <main className="page">
      <div className="nav">
        <Link href="/" className="pill">← Home</Link>
        <span className="pill">{page.intent}</span>
        <span className="pill">{page.primary_keyword}</span>
      </div>

      <article className="container" dangerouslySetInnerHTML={{ __html: page.html }} />

      <footer>AI Writing Tools Hub · Last updated: {page.last_updated}</footer>
    </main>
  );
}
