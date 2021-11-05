import {
  API_URL,
  ENDPOINT_SETTINGS,
  ENDPOINT_USERS_ROLE,
} from '../../../constants/apiConstants';

import axios from 'axios';
import { useQuery } from 'react-query';

export default function useAdminProfilePageQuery(forceRender: number) {
  return useQuery(['loadAdminProfile', forceRender], async () => {
    const { data: settings } = await axios.get(
      `${API_URL}${ENDPOINT_SETTINGS}`
    );

    const { data: employees } = await axios.get(
      `${API_URL}${ENDPOINT_USERS_ROLE(1)}`
    );

    return { ...settings, employees };
  });
}
