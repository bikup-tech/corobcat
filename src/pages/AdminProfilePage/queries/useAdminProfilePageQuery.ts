import { API_URL, ENDPOINT_SETTINGS } from "../../../constants/apiConstants";

import { TSettingsResponse } from "../../../types/settingsTypes";
import axios from "axios";
import { useQuery } from "react-query";

export default function useAdminProfilePageQuery(forceRender: number) {
  return useQuery(["loadAdminProfile", forceRender], async () => {
    const { data } = await axios.get(`${API_URL}${ENDPOINT_SETTINGS}`);

    return data;
  });
}
