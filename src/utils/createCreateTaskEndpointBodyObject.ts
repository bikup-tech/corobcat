export default function createCreateTaskEndpointBodyObject(
  employee: any,
  machine: any,
  values: any
) {
  return {
    selectedMachine: values.selectedMachine.toLowerCase(),
    duration: Number(values.duration),
    user: employee,
    machine: machine,
    material: values.material,
    thickness: Number(values.thickness),
    programNumber: values.programNumber,
    priority: Number(values.priority),
  };
}
