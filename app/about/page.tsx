import Link from 'next/link';
import { Bell, Bookmark, Compass, MapPinned, Search, Settings } from 'lucide-react';

import { Header } from '@/components/Header';
import { dashboardCards } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Dashboard</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Operations overview</h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          <div className="section-shell p-5">
            <div className="flex items-center gap-2 text-sky-300"><Bookmark className="h-4 w-4" /> Favorite flights</div>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              {dashboardCards.favoriteFlights.map((flight) => (
                <div key={flight} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">{flight}</div>
              ))}
            </div>
          </div>

          <div className="section-shell p-5">
            <div className="flex items-center gap-2 text-sky-300"><Compass className="h-4 w-4" /> Recently tracked</div>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              {dashboardCards.recentTracks.map((flight) => (
                <div key={flight} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">{flight}</div>
              ))}
            </div>
          </div>

          <div className="section-shell p-5">
            <div className="flex items-center gap-2 text-sky-300"><Search className="h-4 w-4" /> Saved searches</div>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">Transatlantic westbound</div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">Airport delays</div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">North America</div>
            </div>
          </div>

          <div className="section-shell p-5">
            <div className="flex items-center gap-2 text-sky-300"><Bell className="h-4 w-4" /> Flight alerts</div>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              {dashboardCards.alerts.map((alert) => (
                <div key={alert} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">{alert}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 section-shell p-5">
          <div className="flex items-center gap-2 text-sky-300"><Settings className="h-4 w-4" /> Account settings</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">Notification preferences</div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">Favorite airports</div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">Security & account</div>
          </div>
        </div>
      </main>
    </>
  );
}
