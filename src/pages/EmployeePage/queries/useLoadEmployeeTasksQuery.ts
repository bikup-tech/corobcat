import { useQuery } from "react-query";

// mocks
import {getTaskByUserId} from '../../../mocks/tasksRepository';
 
export default function useLoadEmployeeTasksQuery(employeeId:string) {
    
    // TODO: con el id buscar las tareas vinculadas a este empleado y retornarlas
    // return useQuery(["loadEmployeeTasfs", employeeId])
    return useQuery(["loadEmployeeTasks", employeeId], async () => {
        const employeeTasks = getTaskByUserId(employeeId);
        return employeeTasks
    })
}