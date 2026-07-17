import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shr3y4n.github.io/shr3y4n/'),
  title: 'Shreyan Dey | Embedded Systems, AI & Flight Control Engineer',
  description: 'Personal engineering portfolio of Shreyan Dey. I build intelligent systems that combine electronics, software, and aerospace engineering.',
  openGraph: {
    title: 'Shreyan Dey | Portfolio',
    description: 'I build intelligent systems that combine electronics, software, and aerospace engineering.',
    url: 'https://shr3y4n.github.io/shr3y4n/',
    siteName: 'Shreyan Dey Portfolio',
    images: [
      {
        url: '/shr3y4n/favicon.svg',
        width: 64,
        height: 64,
        alt: 'Shreyan Dey Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Shreyan Dey | Portfolio',
    description: 'I build intelligent systems that combine electronics, software, and aerospace engineering.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/shr3y4n/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-slate-300 font-sans`}>
        {children}
      </body>
    </html>
  );
}
