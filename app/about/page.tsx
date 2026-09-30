import Link from 'next/link';
import { Plane, MapPinned, Search, ShieldCheck, ChevronRight } from 'lucide-react';

import { AnimatedCounter } from '@/components/AnimatedCounter';
import { LiveMap } from '@/components/LiveMap';
import { flights, airportsCount, aircraftCount } from '@/lib/mock-data';

const popularFlights = flights.slice(0, 4);

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="SkyTrack home">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/30 shadow-glow">
              <Plane className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[0.18em] text-white">SKYTRACK</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <Link href="/" className="transition hover:text-white">Live Flights</Link>
            <Link href="/search" className="transition hover:text-white">Flight Search</Link>
            <Link href="/airports" className="transition hover:text-white">Airports</Link>
            <Link href="/aircraft" className="transition hover:text-white">Aircraft</Link>
            <Link href="/about" className="transition hover:text-white">About</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 md:inline-flex">
              Sign In
            </button>
            <Link href="/search" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-glow transition hover:bg-sky-400">
              Get Started
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-200">
              <ShieldCheck className="h-3.5 w-3.5" />
              Global flight intelligence
            </div>
            <h1 className="max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Track Every Flight. <span className="text-sky-400">In Real Time.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-slate-300 md:text-lg">
              Monitor aircraft movement, route progress, airport conditions, and live operational status across the world’s busiest airspace.
            </p>

            <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/70 p-4 shadow-panel backdrop-blur">
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                <label className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-300">
                  <span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-slate-400">Flight</span>
                  <input aria-label="Flight Number" placeholder="SKT221" className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none" />
                </label>
                <label className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-300">
                  <span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-slate-400">Origin</span>
                  <input aria-label="Origin airport" placeholder="JFK" className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none" />
                </label>
                <label className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-300">
                  <span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-slate-400">Destination</span>
                  <input aria-label="Destination airport" placeholder="LHR" className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none" />
                </label>
                <label className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-300">
                  <span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-slate-400">Registration</span>
                  <input aria-label="Aircraft registration" placeholder="N247SK" className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none" />
                </label>
                <Link href="/search" className="flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-4 py-3 font-medium text-slate-950 shadow-glow transition hover:bg-sky-400">
                  <Search className="h-4 w-4" />
                  Search
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[30px] border border-slate-800 bg-slate-950/60 p-4 shadow-panel">
              <div className="mb-4 flex items-center justify-between text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPinned className="h-4 w-4 text-sky-400" />
                  Live global coverage
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Tracking live
                </span>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-800">
                <LiveMap flights={flights.slice(0, 6)} className="h-[360px]" compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-panel">
            <p className="text-sm text-slate-400">Flights currently airborne</p>
            <div className="mt-4 flex items-end justify-between">
              <AnimatedCounter value={248} className="text-4xl font-semibold text-white" />
              <span className="text-xs uppercase tracking-[0.2em] text-sky-300">Live</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-panel">
            <p className="text-sm text-slate-400">Flights tracked today</p>
            <div className="mt-4 flex items-end justify-between">
              <AnimatedCounter value={1826} className="text-4xl font-semibold text-white" />
              <span className="text-xs uppercase tracking-[0.2em] text-sky-300">Today</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-panel">
            <p className="text-sm text-slate-400">Airports monitored</p>
            <div className="mt-4 flex items-end justify-between">
              <AnimatedCounter value={airportsCount} className="text-4xl font-semibold text-white" />
              <span className="text-xs uppercase tracking-[0.2em] text-sky-300">Global</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-panel">
            <p className="text-sm text-slate-400">Aircraft tracked</p>
            <div className="mt-4 flex items-end justify-between">
              <AnimatedCounter value={aircraftCount} className="text-4xl font-semibold text-white" />
              <span className="text-xs uppercase tracking-[0.2em] text-sky-300">Fleet</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sky-300">Popular flights</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Live route activity</h2>
          </div>
          <Link href="/search" className="text-sm text-sky-300 transition hover:text-sky-200">View all tracks</Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {popularFlights.map((flight) => (
            <Link key={flight.flightNumber} href={`/flights/${flight.flightNumber}`} className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-panel transition hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-glow">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span className="font-medium text-white">{flight.flightNumber}</span>
                <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sky-200">
                  {flight.status}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                <span>{flight.origin.code}</span>
                <span className="text-sky-300">✈</span>
                <span>{flight.destination.code}</span>
              </div>

              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Airline</span>
                  <span className="font-medium text-white">{flight.airline}</span>
                </div>
                <div className="flex justify-between">
                  <span>Aircraft</span>
                  <span className="font-medium text-white">{flight.aircraftType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Departure</span>
                  <span className="font-medium text-white">{flight.departureTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Arrival</span>
                  <span className="font-medium text-white">{flight.arrivalTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

