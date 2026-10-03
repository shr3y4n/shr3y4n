import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://shr3y4n.github.io/shr3y4n/'),
  title: 'Shreyan Dey — Developer, Engineer & Builder',
  description:
    'Shreyan Dey is an Electronics & Communication Engineering student building projects across web development, AI, embedded systems, control systems and aerospace.',
  authors: [{ name: 'Shreyan Dey', url: 'https://github.com/shr3y4n' }],
  keywords: [
    'Shreyan Dey',
    'Electronics & Communication Engineering',
    'Developer',
    'Engineer',
    'AI/ML',
    'Embedded Systems',
    'Flight Control',
    'Aerospace',
    'Control Systems',
    'Robotics',
    'Web Development',
  ],
  alternates: {
    canonical: 'https://shr3y4n.github.io/shr3y4n/',
  },
  openGraph: {
    title: 'Shreyan Dey — Developer, Engineer & Builder',
    description:
      'Shreyan Dey is an Electronics & Communication Engineering student building projects across web development, AI, embedded systems, control systems and aerospace.',
    url: 'https://shr3y4n.github.io/shr3y4n/',
    siteName: 'Shreyan Dey Portfolio',
    images: [
      {
        url: '/shr3y4n/favicon.svg',
        width: 64,
        height: 64,
        alt: 'Shreyan Dey Monogram',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Shreyan Dey — Developer, Engineer & Builder',
    description:
      'Shreyan Dey is an Electronics & Communication Engineering student building projects across web development, AI, embedded systems, control systems and aerospace.',
    creator: '@shr3y4n',
  },
  icons: {
    icon: '/shr3y4n/favicon.svg',
    shortcut: '/shr3y4n/favicon.svg',
    apple: '/shr3y4n/favicon.svg',
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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-slate-200 font-sans selection:bg-blue-500/25 selection:text-blue-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
