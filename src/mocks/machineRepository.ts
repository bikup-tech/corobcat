import machines from "./machines.json";

export function getMachineByName(machineName: string) {
  return machines.find((machine) => machine.name === machineName);
}
