import { simulationData } from "../data/simulationData";

let currentMode = "SIMULATION";
let currentData = structuredClone(simulationData);

export function getRoverData() {
  return currentData;
}

export function updateSimulation() {
  if (currentMode !== "SIMULATION") {
    return currentData;
  }

  const data = structuredClone(currentData);

  // Methane
  data.environment.methane = Number(
    Math.max(
      0.1,
      data.environment.methane +
        (Math.random() - 0.5) * 0.06
    ).toFixed(2)
  );

  // Carbon Monoxide
  data.environment.carbonMonoxide = Math.max(
    5,
    Math.round(
      data.environment.carbonMonoxide +
        (Math.random() - 0.5) * 4
    )
  );

  // Hydrogen Sulfide
  data.environment.hydrogenSulfide = Math.max(
    0,
    Math.round(
      data.environment.hydrogenSulfide +
        (Math.random() - 0.5) * 2
    )
  );

  // Oxygen
  data.environment.oxygen = Number(
    Math.max(
      19,
      Math.min(
        21,
        data.environment.oxygen +
          (Math.random() - 0.5) * 0.15
      )
    ).toFixed(1)
  );

  // Humidity
  data.environment.humidity = Math.max(
    50,
    Math.min(
      90,
      Math.round(
        data.environment.humidity +
          (Math.random() - 0.5) * 2
      )
    )
  );

  // Environment temperature
  data.environment.temperature = Math.round(
    data.environment.temperature +
      (Math.random() - 0.5)
  );

  // Rover temperature
  data.rover.temperature = Math.round(
    data.rover.temperature +
      (Math.random() - 0.5)
  );

  // Battery slowly decreases
  data.rover.battery = Math.max(
    0,
    Number(
      (data.rover.battery - 0.01).toFixed(2)
    )
  );

  currentData = data;

  return currentData;
}

export function setDataSource(mode) {
  currentMode = mode;
}

export function getDataSource() {
  return currentMode;
}

export function sendRoverCommand(command) {
  console.log(
    `[${currentMode}] Rover command: ${command}`
  );

  return {
    success: true,
    mode: currentMode,
    command,
  };
}