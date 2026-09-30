'use client';

import { useMemo } from 'react';
import { MapContainer, Marker, Popup, Polyline, TileLayer, CircleMarker } from 'react-leaflet';
import L from 'leaflet';

import { airports, type Flight } from '@/lib/mock-data';

const createMarkerIcon = (status: string) => {
  const label = status === 'Airborne' ? '✈' : status === 'Delayed' ? '!' : status === 'Landed' ? '✓' : '↗';

  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div class="flight-marker marker-${status.toLowerCase().replace(/\s+/g, '-')}">${label}</div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -14],
  });
};

export function LiveMap({
  flights,
  className = 'h-[420px]',
  compact = false,
  selectedFlightId,
}: {
  flights: Flight[];
  className?: string;
  compact?: boolean;
  selectedFlightId?: string;
}) {
  const center = useMemo(() => {
    if (flights.length === 0) return [39.8333, -98.5833];
    const selected = flights.find((flight) => flight.flightNumber === selectedFlightId) ?? flights[0];
    return [selected.origin.lat, selected.origin.lng];
  }, [flights, selectedFlightId]);

  return (
    <div className={className}>
      <MapContainer center={center as [number, number]} zoom={compact ? 3 : 4} scrollWheelZoom className="h-full w-full rounded-[1.25rem]">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {airports.slice(0, 12).map((airport) => (
          <CircleMarker key={airport.code} center={[airport.lat, airport.lng]} radius={4} pathOptions={{ color: '#67e8f9', fillColor: '#67e8f9', fillOpacity: 0.7 }} />
        ))}

        {flights.map((flight) => (
          <div key={flight.flightNumber}>
            <Polyline
              positions={[
                [flight.origin.lat, flight.origin.lng],
                [flight.destination.lat, flight.destination.lng],
              ]}
              pathOptions={{
                color: flight.flightNumber === selectedFlightId ? '#67e8f9' : '#38bdf8',
                weight: flight.flightNumber === selectedFlightId ? 4 : 2,
                opacity: 0.8,
                dashArray: flight.status === 'Delayed' ? '8 8' : undefined,
              }}
            />

            <Marker
              position={[flight.currentLat, flight.currentLng]}
              icon={createMarkerIcon(flight.status)}
            >
              <Popup>
                <div className="min-w-[160px] text-slate-900">
                  <div className="text-sm font-semibold">{flight.flightNumber}</div>
                  <div className="mt-1 text-xs text-slate-600">{flight.airline}</div>
                  <div className="mt-2 text-xs text-slate-700">{flight.origin.code} → {flight.destination.code}</div>
                  <div className="mt-2 text-xs">Status: {flight.status}</div>
                </div>
              </Popup>
            </Marker>
          </div>
        ))}
      </MapContainer>
    </div>
  );
}
