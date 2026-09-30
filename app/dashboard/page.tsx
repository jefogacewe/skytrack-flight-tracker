import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

import { Header } from '@/components/Header';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="section-shell p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-300">About SkyTrack</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">A premium aviation intelligence platform</h1>
          <p className="mt-5 max-w-2xl text-slate-300">
            SkyTrack delivers a clean, modern operational view for airline teams, frequent flyers, and aviation enthusiasts. Built to surface live route activity, route intelligence, and airport conditions in a streamlined control-room experience.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300"><ShieldCheck className="h-5 w-5" /></div>
              <h2 className="text-xl font-semibold text-white">Reliable live data architecture</h2>
              <p className="mt-3 text-sm text-slate-300">Designed with a clean API/service layer that can connect to aviation data providers without disrupting the user experience.</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300"><Zap className="h-5 w-5" /></div>
              <h2 className="text-xl font-semibold text-white">Responsive operational layout</h2>
              <p className="mt-3 text-sm text-slate-300">Built for large desktops, tablets, and mobile devices with a polished dashboard structure and precise motion cues.</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">
            <p className="text-sm text-slate-400">Ready to explore the platform?</p>
            <Link href="/search" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-glow transition hover:bg-sky-400">
              Search flights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

