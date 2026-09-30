import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'leaflet/dist/leaflet.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SkyTrack | Real-Time Flight Tracking',
  description: 'A modern aviation dashboard for flight tracking, airport insights, and aircraft visibility.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased`}>
        <div className="min-h-screen bg-mesh">
          {children}
        </div>
      </body>
    </html>
  );
}
