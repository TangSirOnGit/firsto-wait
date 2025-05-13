import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Firsto.co - Product Launch Platform',
  description: 'The best way to launch your product. Join our waitlist today.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://info.ewaltech.com/script.js" data-website-id="f70a3c20-4028-45de-8b3c-d8d994966050"></script>
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
