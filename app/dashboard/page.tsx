import Link from 'next/link';
import { Activity, Box, Gauge, Plane } from 'lucide-react';

import { Header } from '@/components/Header';
import { aircraft } from '@/lib/mock-data';

export default function AircraftPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Aircraft fleet</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Tracked aircraft overview</h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {aircraft.map((item) => (
            <div key={item.registration} className="section-shell p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.registration}</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{item.type}</h2>
                </div>
                <span className="rounded-full border border-slate-700 bg-slate-950/70 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-sky-200">{item.status}</span>
              </div>

              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <div className="flex justify-between"><span className="text-slate-400">Manufacturer</span><span className="font-medium text-white">{item.manufacturer}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Model</span><span className="font-medium text-white">{item.model}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Operator</span><span className="font-medium text-white">{item.operator}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Current location</span><span className="font-medium text-white">{item.location}</span></div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-400"><Activity className="h-3.5 w-3.5" /> Status</div>
                  <p className="mt-2 text-lg font-semibold text-white">{item.status}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-400"><Plane className="h-3.5 w-3.5" /> Last flight</div>
                  <p className="mt-2 text-lg font-semibold text-white">{item.lastFlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
