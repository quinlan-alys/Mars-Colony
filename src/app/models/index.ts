export class Encounter{
    constructor(
     public id: number,
      public date: string,
      public colonist_id: string,
      public atype: string,
      public action: string

    ){}
}

export class NewColonist{
    constructor(
     public name: string,
      public job: Job, 
      public job_id: string,
      public age: number
      


    ){}
}

interface Colonist{
    constructor(
      name: string,
      job: Job, 
      job_id: string,
      age: number
      


    )
}

export class Job{
    constructor(
     public name: string,
      public job_id: string,
      public description: string

    ){}
}

export class Aliens{
    constructor(
     public type: string,
      public submitted_by: number,
      public id: number,
      public description: string

    ){}
}
