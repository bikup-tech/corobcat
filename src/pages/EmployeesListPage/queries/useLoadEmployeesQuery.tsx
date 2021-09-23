import { useQuery } from "react-query";
import users from '../../../mocks/users.json';

export default function useLoadEmployeesQuery(){
    return useQuery(["loadEmployers"], async ()=>{
        // TODO const {data} = await axios.get('/api/users')
        const data = users;

        return data;
    })
}