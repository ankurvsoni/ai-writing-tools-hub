import './globals.css';
import Link from 'next/link';

export const metadata = {
  metadataBase: new URL('https://reviews.orkolabs.com'),
  title: 'Affiliate Content Hub — Product Reviews & Buying Guides',
  description:
    'Buyer-focused product reviews and buying guides with clear tradeoffs, budget tiers, and practical recommendations.',
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
            <Link href="/" className="brand">Affiliate Content Hub</Link>
            <nav className="topNav">
              <a href="https://www.orkolabs.com">All Projects</a>
              <Link href="/all-guides">All Guides</Link>
              <Link href="/how-we-test">How we test</Link>
              <Link href="/editorial-policy">Editorial policy</Link>
              <Link href="/disclosure">Disclosure</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        <div className="affiliateBar">
          As an Amazon Associate I earn from qualifying purchases. <Link href="/disclosure">Disclosure</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
