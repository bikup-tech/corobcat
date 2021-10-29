import { useQuery } from "react-query";

export default function useAdminProfilePageQuery() {
  return useQuery(["loadAdminProfile"], async () => {
    return {
      materials: ["Madera", "Hierro", "Otro", "Plastico"],
      thicknesses: [0.1, 0.2, 0.3, 0.4, 0.5],
      correctionalFactorMachine1: 0.1,
      correctionalFactorMachine2: 0.15,
    };
  });
}
