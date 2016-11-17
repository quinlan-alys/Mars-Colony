import { Component, OnInit } from '@angular/core';
import { Aliens, NewEncounter } from '../models';

import  AliensService  from '../services/aliens.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService]
})
export class ReportComponent implements OnInit {
  
  marsAliens: Aliens[];
  
  report: NewEncounter;

  NO_ALIEN_SELECTED = '(none)';

constructor(aliensService: AliensService) { 

  this.report = new NewEncounter ( '2012-11-02', '1', null);

  aliensService.getAliens().subscribe((aliens) => {
    this.marsAliens = aliens;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {

  }

   get alienSelected (){
    return this.report.atype === this.NO_ALIEN_SELECTED;
  }

}
