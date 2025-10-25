/*
Create a full workflow under the departments
create a department -> verify that you could read the new department
then update the same department with patch and put method
then delete the newly created department. 
*/

import { BaseEndpoint } from "./BaseEndpoint";

export interface Department{
            department_id: number,
            department_name: string,
            location_id?:number | null,
            manager_id?:number  | null
}

export class DepartmentsEndpoint extends BaseEndpoint<Department>{
    protected basePath= '/api/departments';
    
    protected requiredFields =[
          "department_id",
            "department_name"
    ];

}