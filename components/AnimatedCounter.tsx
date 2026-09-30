import { Building2, CloudSun, MapPin, PlaneLanding, PlaneTakeoff } from 'lucide-react';

import { Header } from '@/components/Header';
import { airports } from '@/lib/mock-data';

export default function AirportsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Airport intelligence</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Global airport overview</h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {airports.map((airport) => (
            <div key={airport.code} className="section-shell p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{airport.code}</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{airport.name}</h2>
                </div>
                <div className="rounded-full border border-sky-500/40 bg-sky-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-sky-200">
                  Active
                </div>
              </div>

              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2"><Building2 className="h-4 w-4 text-sky-300" /> {airport.city}, {airport.country}</div>
                <div className="flex items-center gap-2"><CloudSun className="h-4 w-4 text-sky-300" /> Local time: {airport.localTime}</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-300" /> Runways: {airport.runway}</div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-400"><PlaneTakeoff className="h-3.5 w-3.5" /> Departures</div>
                  <p className="mt-2 text-lg font-semibold text-white">74</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-400"><PlaneLanding className="h-3.5 w-3.5" /> Arrivals</div>
                  <p className="mt-2 text-lg font-semibold text-white">69</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

