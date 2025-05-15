import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Firsto.co - Product Launch Platform | The Starting Point of Your Product Journey',
  description: 'The ultimate product launch platform where makers ship faster and share smarter. Firsto is where creators celebrate their first step and early adopters discover what\'s next.',
  keywords: 'product launch platform, launch platform, ship first, mvp, early adopters, indie hackers, makers, developers, product journey, startup, product launch, first launch',
  openGraph: {
    title: 'Firsto.co - Product Launch Platform | The Starting Point of Your Product Journey',
    description: 'The ultimate product launch platform where makers ship faster and share smarter. Firsto is where creators celebrate their first step and early adopters discover what\'s next.',
    url: 'https://firsto.co',
    siteName: 'Firsto.co',
    images: [
      {
        url: 'https://firsto.co/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Firsto - The Starting Point of Your Product Journey',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Firsto.co - Product Launch Platform | The Starting Point of Your Product Journey',
    description: 'The ultimate product launch platform where makers ship faster and share smarter. Firsto is where creators celebrate their first step and early adopters discover what\'s next.',
    creator: '@innovate_leo',
    images: ['https://firsto.co/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://firsto.co',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://info.ewaltech.com/script.js"
          data-website-id="f70a3c20-4028-45de-8b3c-d8d994966050"
        ></script>
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
