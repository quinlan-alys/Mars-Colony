export class NewEncounter{
    constructor(
      public date: string,
      public atype: string,
      public action: string

    ){}
}

interface Encounter{
    constructor(
     id: number,
     date: string,
     colonist_id: string,
     atype: string,
     action: string

    )
}

export class NewColonist{
    constructor(
     public name: string,
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

