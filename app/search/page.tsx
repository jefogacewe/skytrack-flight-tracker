import Link from 'next/link';
import { Plane } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Live Flights' },
  { href: '/search', label: 'Flight Search' },
  { href: '/airports', label: 'Airports' },
  { href: '/aircraft', label: 'Aircraft' },
  { href: '/about', label: 'About' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="SkyTrack home">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/30 shadow-glow">
            <Plane className="h-5 w-5" />
          </div>
          <div className="text-lg font-semibold tracking-[0.18em] text-white">SKYTRACK</div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 md:inline-flex">
            Sign In
          </button>
          <Link href="/search" className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-glow transition hover:bg-sky-400">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
