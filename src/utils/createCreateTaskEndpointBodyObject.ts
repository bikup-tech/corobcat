export default function createCreateTaskEndpointBodyObject(
  employee: any,
  machine: any,
  values: any
) {
  return {
    duration: Number(values.duration),
    user: employee,
    machine: machine,
    material: values.material,
    thickness: Number(values.thickness),
    programNumber: values.programNumber,
    priority: Number(values.priority),
  };
}
