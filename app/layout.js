import './globals.css';
import Link from 'next/link';

export const metadata = {
  metadataBase: new URL('https://www.orkolabs.com'),
  title: 'Orko Labs — Reviews, ROI Calculators & Digital Tools',
  description:
    'Practical product reviews, AI tool ROI calculators, and digital tools. Compare options with clear tradeoffs, budget tiers, and transparent recommendations.',
  alternates: {
    canonical: 'https://www.orkolabs.com/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1733768466473341"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <header className="siteHeader">
          <div className="wrap navRow">
            <Link href="/" className="brand">Orko Labs</Link>
            <nav className="topNav">
              <Link href="/how-we-test">How we test</Link>
              <Link href="/editorial-policy">Editorial policy</Link>
              <Link href="/disclosure">Disclosure</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
