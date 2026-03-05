import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'OrkoLabs — AI Writing Tools Hub',
  description: 'Practical reviews, comparisons, and alternatives for AI writing tools.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <div className="wrap navRow">
            <Link href="/" className="brand">OrkoLabs</Link>
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
