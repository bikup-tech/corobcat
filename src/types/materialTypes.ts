import { IRON, COPPER, ALUMINUM, BRASS } from "../constants/materials";

export type TMaterial =
  | typeof IRON
  | typeof COPPER
  | typeof ALUMINUM
  | typeof BRASS;
