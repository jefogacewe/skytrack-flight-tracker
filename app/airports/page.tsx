import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Plane, Radar, Clock3, Gauge, Compass, Route, TimerReset } from 'lucide-react';

import { Header } from '@/components/Header';
import { LiveMap } from '@/components/LiveMap';
import { flights } from '@/lib/mock-data';

export default function FlightDetailsPage({ params }: { params: { flightNumber: string } }) {
  const flight = flights.find((item) => item.flightNumber.toLowerCase() === params.flightNumber.toLowerCase());

  if (!flight) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/search" className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-300 transition hover:border-slate-500">
          <ArrowLeft className="h-4 w-4" />
          Back to search
        </Link>

        <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sky-300">Flight details</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">{flight.flightNumber}</h1>
          </div>
          <div className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-sm text-sky-200">
            {flight.status}
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="section-shell p-4 md:p-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Airline</p>
                <p className="mt-3 text-lg font-semibold text-white">{flight.airline}</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Aircraft</p>
                <p className="mt-3 text-lg font-semibold text-white">{flight.aircraftType}</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Registration</p>
                <p className="mt-3 text-lg font-semibold text-white">{flight.registration}</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Gate</p>
                <p className="mt-3 text-lg font-semibold text-white">{flight.gate}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex items-center gap-2 text-sky-300">
                  <MapPin className="h-4 w-4" />
                  Origin
                </div>
                <p className="mt-3 text-xl font-semibold text-white">{flight.origin.code}</p>
                <p className="text-sm text-slate-300">{flight.origin.name}</p>
                <p className="mt-2 text-sm text-slate-400">{flight.origin.city}</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex items-center gap-2 text-sky-300">
                  <MapPin className="h-4 w-4" />
                  Destination
                </div>
                <p className="mt-3 text-xl font-semibold text-white">{flight.destination.code}</p>
                <p className="text-sm text-slate-300">{flight.destination.name}</p>
                <p className="mt-2 text-sm text-slate-400">{flight.destination.city}</p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
              <LiveMap flights={[flight]} selectedFlightId={flight.flightNumber} className="h-[360px]" compact />
            </div>
          </section>

          <aside className="space-y-6">
            <div className="section-shell p-4 md:p-5">
              <div className="mb-4 flex items-center gap-2 text-sky-300">
                <Radar className="h-4 w-4" />
                Current telemetry
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-400">
                    <Gauge className="h-3.5 w-3.5" />
                    Altitude
                  </div>
                  <p className="mt-2 font-semibold text-white">{flight.altitude.toLocaleString()} ft</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-400">
                    <Plane className="h-3.5 w-3.5" />
                    Speed
                  </div>
                  <p className="mt-2 font-semibold text-white">{flight.speed} kt</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-400">
                    <Compass className="h-3.5 w-3.5" />
                    Heading
                  </div>
                  <p className="mt-2 font-semibold text-white">{flight.heading}°</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-400">
                    <TimerReset className="h-3.5 w-3.5" />
                    Progress
                  </div>
                  <p className="mt-2 font-semibold text-white">{flight.progress}%</p>
                </div>
              </div>
            </div>

            <div className="section-shell p-4 md:p-5">
              <div className="mb-4 flex items-center gap-2 text-sky-300">
                <Clock3 className="h-4 w-4" />
                Schedule 
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex justify-between"><span>Departure</span><span className="font-medium text-white">{flight.departureTime}</span></div>
                <div className="flex justify-between"><span>Estimated arrival</span><span className="font-medium text-white">{flight.arrivalTime}</span></div>
                <div className="flex justify-between"><span>Duration</span><span className="font-medium text-white">{flight.duration}</span></div>
                <div className="flex justify-between"><span>Distance traveled</span><span className="font-medium text-white">{flight.distanceTraveled} nm</span></div>
                <div className="flex justify-between"><span>Distance remaining</span><span className="font-medium text-white">{flight.distanceRemaining} nm</span></div>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-8 section-shell p-4 md:p-6">
          <div className="mb-5 flex items-center gap-2 text-sky-300">
            <Route className="h-4 w-4" />
            Flight timeline
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {['Departure', 'Airborne', 'Current position', 'Arrival'].map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{step}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/15 text-sm font-medium text-sky-200">{index + 1}</span>
                </div>
                <p className="mt-4 text-sm text-slate-300">
                  {index === 0 && flight.departureTime}
                  {index === 1 && 'Cruise altitude'}
                  {index === 2 && `${flight.currentLat.toFixed(2)}, ${flight.currentLng.toFixed(2)}`}
                  {index === 3 && flight.arrivalTime}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
