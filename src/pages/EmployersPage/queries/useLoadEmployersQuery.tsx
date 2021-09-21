import { useQuery } from "react-query";
import users from '../../../mocks/users.json';

export default function useLoadEmployersQuery(){
    return useQuery(["loadEmployers"], async ()=>{
        // TODO const users = await axios.get('/api/users')
        const getUsers = users;

        return getUsers;
    })
}