import { useQuery } from "react-query";

export default function useAdminProfilePageQuery() {
  return useQuery(["loadAdminProfile"], async () => {
    return {};
  });
}
