'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ArrowUpDown, Filter, Search } from 'lucide-react';

import { Header } from '@/components/Header';
import { flights } from '@/lib/mock-data';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const [airlineFilter, setAirlineFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const uniqueAirlines = useMemo(() => ['All', ...new Set(flights.map((flight) => flight.airline))], []);

  const filteredFlights = useMemo(() => {
    return flights.filter((flight) => {
      const matchesQuery =
        !query ||
        flight.flightNumber.toLowerCase().includes(query.toLowerCase()) ||
        flight.airline.toLowerCase().includes(query.toLowerCase()) ||
        flight.origin.code.toLowerCase().includes(query.toLowerCase()) ||
        flight.destination.code.toLowerCase().includes(query.toLowerCase()) ||
        flight.registration.toLowerCase().includes(query.toLowerCase());

      const matchesStatus = status === 'All' || flight.status === status;
      const matchesAirline = airlineFilter === 'All' || flight.airline === airlineFilter;

      return matchesQuery && matchesStatus && matchesAirline;
    });
  }, [airlineFilter, query, status]);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Flight search</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Track flights by route, airline, or registration</h1>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
            <Filter className="h-4 w-4 text-sky-300" />
            {filteredFlights.length} results
          </div>
        </div>

        <section className="section-shell p-4 md:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.45fr_0.45fr]">
            <label className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-300">
              <Search className="h-4 w-4 text-sky-300" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search flights, airline, route, or registry"
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
            </label>

            <select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white focus:outline-none">
              <option>All</option>
              <option>Airborne</option>
              <option>Delayed</option>
              <option>Landed</option>
              <option>Diverted</option>
            </select>

            <select value={airlineFilter} onChange={(event) => setAirlineFilter(event.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white focus:outline-none">
              {uniqueAirlines.map((airline) => (
                <option key={airline} value={airline}>{airline}</option>
              ))}
            </select>
          </div>
        </section>

        <section className="mt-8">
          {isLoading ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-52 animate-pulse rounded-3xl border border-slate-800 bg-slate-900/70" />
              ))}
            </div>
          ) : filteredFlights.length === 0 ? (
            <div className="section-shell flex flex-col items-center justify-center p-12 text-center">
              <div className="mb-3 text-4xl">✈</div>
              <h2 className="text-xl font-semibold text-white">No flights match this search</h2>
              <p className="mt-2 max-w-md text-sm text-slate-400">Try a broader flight number, airline, or airport code to find live activity.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredFlights.map((flight) => (
                <Link key={flight.flightNumber} href={`/flights/${flight.flightNumber}`} className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-panel transition hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-glow">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Flight</p>
                      <h2 className="mt-1 text-2xl font-semibold text-white">{flight.flightNumber}</h2>
                    </div>
                    <span className="rounded-full border border-slate-700 bg-slate-950/70 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sky-200">
                      {flight.status}
                    </span>
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Airline</span>
                      <span className="font-medium text-white">{flight.airline}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Route</span>
                      <span className="font-medium text-white">{flight.origin.code} → {flight.destination.code}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Aircraft</span>
                      <span className="font-medium text-white">{flight.aircraftType}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Depart</span>
                      <span className="font-medium text-white">{flight.departureTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Arrival</span>
                      <span className="font-medium text-white">{flight.arrivalTime}</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Altitude</span>
                    <span className="text-sm font-medium text-sky-300">{flight.altitude.toLocaleString()} ft</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
