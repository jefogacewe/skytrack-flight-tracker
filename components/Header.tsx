export type FlightStatus = 'Airborne' | 'Delayed' | 'Landed' | 'Diverted';

export type Airport = {
  code: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  localTime: string;
  runway: string;
};

export type Flight = {
  flightNumber: string;
  airline: string;
  aircraftType: string;
  registration: string;
  origin: { code: string; name: string; city: string; lat: number; lng: number };
  destination: { code: string; name: string; city: string; lat: number; lng: number };
  departureTime: string;
  arrivalTime: string;
  status: FlightStatus;
  altitude: number;
  speed: number;
  heading: number;
  currentLat: number;
  currentLng: number;
  distanceTraveled: number;
  distanceRemaining: number;
  duration: string;
  progress: number;
  gate: string;
};

export const flights: Flight[] = [
  {
    flightNumber: 'SKT221',
    airline: 'SkyJet Airways',
    aircraftType: 'Boeing 737-800',
    registration: 'N247SK',
    origin: { code: 'JFK', name: 'John F. Kennedy Int.', city: 'New York', lat: 40.6413, lng: -73.7781 },
    destination: { code: 'LHR', name: 'Heathrow Airport', city: 'London', lat: 51.4700, lng: -0.4543 },
    departureTime: '08:10',
    arrivalTime: '20:35',
    status: 'Airborne',
    altitude: 35400,
    speed: 510,
    heading: 52,
    currentLat: 47.874, 
    currentLng: -20.425,
    distanceTraveled: 3600,
    distanceRemaining: 2410,
    duration: '12h 25m',
    progress: 60,
    gate: 'A12',
  },
  {
    flightNumber: 'SKT118',
    airline: 'Nova Air',
    aircraftType: 'Airbus A321neo',
    registration: 'G-9XNQ',
    origin: { code: 'LAX', name: 'Los Angeles International', city: 'Los Angeles', lat: 33.9425, lng: -118.4081 },
    destination: { code: 'DXB', name: 'Dubai International', city: 'Dubai', lat: 25.2532, lng: 55.3657 },
    departureTime: '11:45',
    arrivalTime: '08:10',
    status: 'Delayed',
    altitude: 27300,
    speed: 472,
    heading: 92,
    currentLat: 35.079,
    currentLng: -75.331,
    distanceTraveled: 2650,
    distanceRemaining: 3820,
    duration: '14h 10m',
    progress: 41,
    gate: 'B7',
  },
  {
    flightNumber: 'SKT434',
    airline: 'Harbor Airlines',
    aircraftType: 'Airbus A330-300',
    registration: 'VH-HTA',
    origin: { code: 'SYD', name: 'Sydney Kingsford Smith', city: 'Sydney', lat: -33.9399, lng: 151.1753 },
    destination: { code: 'HND', name: 'Haneda Airport', city: 'Tokyo', lat: 35.5494, lng: 139.7798 },
    departureTime: '06:05',
    arrivalTime: '13:50',
    status: 'Landed',
    altitude: 0,
    speed: 0,
    heading: 0,
    currentLat: 35.5494,
    currentLng: 139.7798,
    distanceTraveled: 4000,
    distanceRemaining: 0,
    duration: '7h 45m',
    progress: 100,
    gate: 'C22',
  },
  {
    flightNumber: 'SKT907',
    airline: 'Aero Pacific',
    aircraftType: 'Boeing 787-9',
    registration: 'N811AP',
    origin: { code: 'SFO', name: 'San Francisco Int.', city: 'San Francisco', lat: 37.6213, lng: -122.3790 },
    destination: { code: 'HKG', name: 'Hong Kong Intl.', city: 'Hong Kong', lat: 22.3080, lng: 113.9185 },
    departureTime: '09:20',
    arrivalTime: '03:05',
    status: 'Diverted',
    altitude: 31600,
    speed: 521,
    heading: 116,
    currentLat: 33.727,
    currentLng: -118.286,
    distanceTraveled: 3300,
    distanceRemaining: 2980,
    duration: '17h 45m',
    progress: 52,
    gate: 'D4',
  },
  {
    flightNumber: 'SKT450',
    airline: 'Summit Air',
    aircraftType: 'Embraer E190-E2',
    registration: 'C-GRJM',
    origin: { code: 'YYZ', name: 'Toronto Pearson', city: 'Toronto', lat: 43.6777, lng: -79.6248 },
    destination: { code: 'MIA', name: 'Miami Int.', city: 'Miami', lat: 25.7959, lng: -80.2870 },
    departureTime: '07:40',
    arrivalTime: '11:00',
    status: 'Airborne',
    altitude: 22600,
    speed: 438,
    heading: 209,
    currentLat: 33.655,
    currentLng: -86.286,
    distanceTraveled: 1780,
    distanceRemaining: 1160,
    duration: '3h 20m',
    progress: 61,
    gate: 'E12',
  },
  {
    flightNumber: 'SKT612',
    airline: 'Blue Horizon',
    aircraftType: 'Boeing 767-300ER',
    registration: 'D-ABCD',
    origin: { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', lat: 50.0379, lng: 8.5622 },
    destination: { code: 'JFK', name: 'John F. Kennedy Int.', city: 'New York', lat: 40.6413, lng: -73.7781 },
    departureTime: '14:10',
    arrivalTime: '18:45',
    status: 'Airborne',
    altitude: 33400,
    speed: 478,
    heading: 302,
    currentLat: 46.438,
    currentLng: -23.468,
    distanceTraveled: 3050,
    distanceRemaining: 2850,
    duration: '8h 35m',
    progress: 52,
    gate: 'G2',
  }
];

export const airports: Airport[] = [
  { code: 'JFK', name: 'John F. Kennedy International', city: 'New York', country: 'United States', lat: 40.6413, lng: -73.7781, localTime: '08:10 EST', runway: '04L/22R • 13L/31R', },
  { code: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'United Kingdom', lat: 51.4700, lng: -0.4543, localTime: '13:10 BST', runway: '09L/27R • 09R/27L', },
  { code: 'DXB', name: 'Dubai International', city: 'Dubai', country: 'United Arab Emirates', lat: 25.2532, lng: 55.3657, localTime: '17:10 GST', runway: '12L/30R • 12R/30L', },
  { code: 'HND', name: 'Haneda Airport', city: 'Tokyo', country: 'Japan', lat: 35.5494, lng: 139.7798, localTime: '22:10 JST', runway: '16L/34R • 16R/34L', },
  { code: 'MIA', name: 'Miami International', city: 'Miami', country: 'United States', lat: 25.7959, lng: -80.2870, localTime: '08:10 EDT', runway: '08L/26R • 09/27', },
  { code: 'HKG', name: 'Hong Kong International', city: 'Hong Kong', country: 'China', lat: 22.3080, lng: 113.9185, localTime: '21:10 HKT', runway: '07C/25C • 07L/25R', },
  { code: 'SFO', name: 'San Francisco International', city: 'San Francisco', country: 'United States', lat: 37.6213, lng: -122.3790, localTime: '06:10 PDT', runway: '28L/10R • 01L/19R', },
  { code: 'SYD', name: 'Sydney Airport', city: 'Sydney', country: 'Australia', lat: -33.9399, lng: 151.1753, localTime: '23:10 AEST', runway: '16L/34R • 16R/34L', },
];

export const aircraft = [
  {
    registration: 'N247SK',
    type: 'Boeing 737-800',
    manufacturer: 'Boeing',
    model: '737-800',
    operator: 'SkyJet Airways',
    status: 'Airborne',
    location: 'Atlantic Ocean',
    lastFlight: 'SKT221',
  },
  {
    registration: 'G-9XNQ',
    type: 'Airbus A321neo',
    manufacturer: 'Airbus',
    model: 'A321neo',
    operator: 'Nova Air',
    status: 'Delayed',
    location: 'Offshore Atlantic',
    lastFlight: 'SKT118',
  },
  {
    registration: 'VH-HTA',
    type: 'Airbus A330-300',
    manufacturer: 'Airbus',
    model: 'A330-300',
    operator: 'Harbor Airlines',
    status: 'Landed',
    location: 'Haneda',
    lastFlight: 'SKT434',
  },
];

export const airportsCount = 128;
export const aircraftCount = 4180;

export const dashboardCards = {
  favoriteFlights: ['SKT221', 'SKT450', 'SKT612'],
  recentTracks: ['SKT118', 'SKT434', 'SKT907'],
  alerts: ['Weather update over the North Atlantic', 'Runway delay at JFK', 'Fuel savings reporting'],
};
