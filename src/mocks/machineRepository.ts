import machines from "./machines.json";

export function getMachineByName(machineName: string) {
  console.log("getname", machineName);

  return machines.find((machine) => machine.name === machineName);
}

export function getMachines() {
  return machines;
}
