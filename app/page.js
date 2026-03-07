import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="wrap">
      <div className="top">
        <div className="badge">Orko Labs</div>
        <div className="badge">Digital asset studio</div>
      </div>

      <section className="hero">
        <h1>Orko Labs Projects</h1>
        <p>
          We build practical digital assets focused on automation, decision tools,
          and compounding internet distribution.
        </p>
      </section>

      <section>
        <h2 className="section-title">Live Projects</h2>
        <div className="grid">
          <a className="card" href="https://roi.orkolabs.com" target="_blank" rel="noopener noreferrer">
            <h3>AI Tool ROI Calculators</h3>
            <p>Estimate software cost, monthly savings, payback period, and break-even outcomes.</p>
          </a>

          <a className="card" href="https://recon.orkolabs.com" target="_blank" rel="noopener noreferrer">
            <h3>Invoice Reconciliation Utility</h3>
            <p>Match bank and invoice CSV files locally, review uncertain records, and export clean results.</p>
          </a>

          <a className="card" href="https://www.orkolabs.com/tools" target="_blank" rel="noopener noreferrer">
            <h3>AI Writing Tools Hub</h3>
            <p>Comparisons, alternatives, and review guides for AI writing workflows.</p>
          </a>
        </div>
      </section>

      <section>
        <h2 className="section-title">Standards</h2>
        <div className="notice">
          Clear disclosures, transparent methodology, and low-maintenance systems-first execution.
        </div>
      </section>

      <footer>
        Built by Orko Labs · <Link href="/about">About</Link> · <Link href="/editorial-policy">Editorial policy</Link>
      </footer>
    </main>
  );
}
