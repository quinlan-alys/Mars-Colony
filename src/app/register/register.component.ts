import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NewColonist, Job } from '../models';
import  JobsService  from '../services/jobs.service';
import  ColonistsService  from '../services/colonists.service';
import { cantBe }  from '../shared/validators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [JobsService, ColonistsService]
})
export class RegisterComponent implements OnInit {


marsJobs: Job[];
registerForm: FormGroup;
NO_JOB_SELECTED = '(none)';

  constructor(jobService: JobsService,
  private colonistService: ColonistsService, 
            private router: Router,) { 
    
    jobService.getJobs().subscribe((jobs) => {
      this.marsJobs = jobs;
    }, (err) => {
      console.log(err);
    } 
    )};

      tooOld(value:number): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} => {
        return control.value > 100 ? {'too old': {value}}:null;
      };
      }
    

  ngOnInit() {
    this.registerForm = new FormGroup ({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      age: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      job_id: new FormControl(this.NO_JOB_SELECTED, [cantBe(this.NO_JOB_SELECTED)]),
    });
  
    setTimeout(() => {

    }, 2000);
  }
  
  onSubmit(event){
    event.preventDefault();
    if (this.registerForm.invalid) {
      //the form is invalid

    }else{
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;
      const colonist = new NewColonist(name, job_id, age);
     
      this.colonistService.submitColonist(colonist).subscribe( () => {
      this.router.navigate(['/encounters']);
    }, (err) => {
      console.log(err);
    });
    }
    
    }

}
