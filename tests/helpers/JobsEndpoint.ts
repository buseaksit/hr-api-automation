import { BaseEndpoint } from "./BaseEndpoint";

export interface Job {
    job_id: string;
    job_title: string;
    min_salary?: number | null;
    max_salary?: number | null;
}

export class JobsEndpoint extends BaseEndpoint<Job>{
    protected basePath= '/api/jobs';
    
    protected requiredFields =[
          "job_id",
          "job_title"
    ];

}