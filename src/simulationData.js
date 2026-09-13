export const simulationData = {
  rover: {
    id: "ROVER-01",
    mode: "AUTONOMOUS",
    status: "ONLINE",
    battery: 98,
    temperature: 32,
    depth: 142,
    position: "Sector B-3",
    connection: "STRONG",
  },

  environment: {
    methane: 0.42,
    carbonMonoxide: 18,
    hydrogenSulfide: 2,
    oxygen: 20.7,
    humidity: 74,
    visibility: "GOOD",
    temperature: 29,
  },

  hazards: [
    {
      id: 1,
      type: "METHANE",
      level: "LOW",
      location: "Tunnel B-3",
      value: "0.42%",
    },
    {
      id: 2,
      type: "UNSTABLE ROCK",
      level: "MEDIUM",
      location: "Tunnel B-4",
      value: "CAUTION",
    },
  ],

  survivors: [
    {
      id: 1,
      location: "Sector C-2",
      confidence: 94,
      status: "LOCATED",
    },
  ],

  network: {
    status: "STABLE",
    nodesOnline: 3,
    gateway: "CONNECTED",
    criticalNode: null,
  },

  dataSource: "SIMULATION",
};