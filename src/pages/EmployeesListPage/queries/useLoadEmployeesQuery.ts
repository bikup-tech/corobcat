import { API_URL, ENDPOINT_USERS_ROLE } from '../../../constants/apiConstants';

import { EMPLOYEE_NUMBER } from '../../../constants/rolesByNumber';
import axios from 'axios';
import { useQuery } from 'react-query';

export default function useLoadEmployeesQuery() {
  return useQuery(['loadEmployers'], async () => {
    const endpoint = `${API_URL}${ENDPOINT_USERS_ROLE(EMPLOYEE_NUMBER)}`;
    const { data } = await axios.get(endpoint);

    return data;
  });
}
