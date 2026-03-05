import './globals.css';

export const metadata = {
  title: 'AI Writing Tools Hub',
  description: 'Best AI writing tools, comparisons, alternatives, and reviews.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
