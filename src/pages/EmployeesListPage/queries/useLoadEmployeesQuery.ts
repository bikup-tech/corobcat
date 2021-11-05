import { API_URL, ENDPOINT_USERS_ROLE } from '../../../constants/apiConstants';

import axios from 'axios';
import { useQuery } from 'react-query';

export default function useLoadEmployeesQuery() {
  return useQuery(['loadEmployers'], async () => {
    const endpoint = `${API_URL}${ENDPOINT_USERS_ROLE(0)}`;
    const { data } = await axios.get(endpoint);

    return data;
  });
}
