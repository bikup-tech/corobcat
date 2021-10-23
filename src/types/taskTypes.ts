export type TTaskResponse = {
  _id: string;
  taskNumber: number;
  status: number;
  start: Date | string;
  end: Date | string | null;
  duration: number;
  user: string; // s'hauria de dir user i fer seriv el populate
  machine: string; // s'hauria de dir machine i fer el populate
  material: string;
  thickness: number;
  programNumber: string;
  priority: number;
};
