export default function Home() {
  return (
    <main className="wrap">
      <h1>Orko Labs Projects</h1>
      <p className="muted">Practical digital products, calculators, and revenue-focused web assets.</p>

      <div className="grid">
        <a className="card" href="https://roi.orkolabs.com" target="_blank" rel="noopener noreferrer">
          <h3>AI Tool ROI Calculators</h3>
          <p>Fast ROI and pricing calculators for common AI tool adoption decisions.</p>
        </a>

        <a className="card" href="https://recon.orkolabs.com" target="_blank" rel="noopener noreferrer">
          <h3>Invoice Recon</h3>
          <p>Invoice reconciliation workflow utility for cleaner monthly finance ops.</p>
        </a>

        <a className="card" href="https://www.orkolabs.com/tools" target="_blank" rel="noopener noreferrer">
          <h3>AI Writing Tools Hub</h3>
          <p>Comparison pages and practical guides for AI writing workflows.</p>
        </a>

        <a className="card" href="https://cricket.orkolabs.com" target="_blank" rel="noopener noreferrer">
          <h3>ABCD Cricket</h3>
          <p>2-player turn-based ABCD cricket game for quick local matches.</p>
        </a>

        <a className="card" href="https://reviews.orkolabs.com" target="_blank" rel="noopener noreferrer">
          <h3>Affiliate Content Hub</h3>
          <p>Buyer-focused product reviews with clear tradeoffs and budget tiers.</p>
        </a>
      </div>
    </main>
  );
}
