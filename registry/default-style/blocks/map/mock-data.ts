export const mockMapData = {
  singleMarker: {
    sectionTitle: "Our Location",
    sectionDescription: "Find us easily on the map!",
    locations: [{
      name: "Our Main Office",
      address: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
      latitude: 37.4230,
      longitude: -122.0840,
    }],
    variant: "single-marker" as const,
    zoom: 15,
  },
  multipleMarkers: {
    sectionTitle: "Our Global Presence",
    sectionDescription: "We have offices around the world to serve you better.",
    locations: [
      { name: "New York Office", address: "New York, NY", latitude: 40.7128, longitude: -74.0060 },
      { name: "London Office", address: "London, UK", latitude: 51.5074, longitude: -0.1278 },
      { name: "Tokyo Office", address: "Tokyo, Japan", latitude: 35.6895, longitude: 139.6917 },
    ],
    variant: "multiple-markers" as const,
    zoom: 2,
  },
  routeArea: {
    sectionTitle: "Delivery Route",
    sectionDescription: "See our typical delivery route within the city.",
    locations: [{ name: "Start Point", latitude: 34.0522, longitude: -118.2437 }], // Just one for display purposes
    routeCoordinates: [
      { latitude: 34.0522, longitude: -118.2437 }, // Los Angeles
      { latitude: 34.0522, longitude: -118.25 },
      { latitude: 34.06, longitude: -118.26 },
      { latitude: 34.065, longitude: -118.27 },
      { latitude: 34.07, longitude: -118.28 },
      { latitude: 34.075, longitude: -118.29 },
    ],
    variant: "route-area" as const,
    zoom: 12,
  },
};
