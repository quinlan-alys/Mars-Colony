export class NewEncounter{
    constructor(
      public action: string,
      public atype: string,
      public colonist_id: number,
      public date: string
    ){}
}

export interface Encounter{
   
     id: number;
     date: string;
     colonist_id: number;
     atype: string;
     action: string;

    
}

export class NewColonist{
    constructor(
      public name: string,
      public job_id: string,
      public age: number
      


    ){}
}

export interface Colonist{
   
      name: string;
      job: Job;
      job_id: string;
      age: number;
      


     
}

export interface Job{
    
      name: string;
      job_id: string;
      description: string;
}

export interface Aliens{
    
        type: string;
        submitted_by: number;
        id: number;
        description: string;

    
}

