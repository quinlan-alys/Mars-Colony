import { Component, OnInit } from '@angular/core';
import { Aliens, NewEncounter } from '../models';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import EncounterService from '../services/encounters.service';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import  AliensService  from '../services/aliens.service';
import { cantBe } from '../shared/validators';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensService, EncounterService]
})
export class ReportComponent implements OnInit {
  
  marsAliens: Aliens[];
  reportForm: FormGroup;
  report: NewEncounter;

  NO_ALIEN_SELECTED = '(none)';

constructor(private aliensService: AliensService, 
            private router: Router,
            private encounterService: EncounterService) { 

            

  // this.report = new NewEncounter ( '2012-11-02', null, null, null);

  aliensService.getAliens().subscribe((aliens) => {
    this.marsAliens = aliens;
    }, err => {
      console.log(err);
    });
  }



  ngOnInit() {
    this.reportForm = new FormGroup ({
      atype: new FormControl(this.NO_ALIEN_SELECTED,[cantBe(this.NO_ALIEN_SELECTED)]),
      action: new FormControl('', [Validators.required, Validators.maxLength(450)]),
    });

  }

private getDate() {
  const date = new Date ();
return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
 }


  
onSubmit(event) {

  
  event.preventDefault();
   if (this.reportForm.invalid) {
      //the form is invalid


    }else{
      const atype = this.reportForm.get('atype').value;
      const action = this.reportForm.get('action').value;
      const date = this.getDate();
  
      const encounter =new NewEncounter(action, atype, 4, date);

     
     this.encounterService.submitEncounter(encounter).subscribe( () => {
      this.router.navigate(['/encounters']);
    }, (err) => {
      console.log(err);
    });
  }

  
}
    
}
