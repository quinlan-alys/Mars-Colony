import { Component, OnInit } from '@angular/core';

class Apple {
  
constructor(public name: string,
  public color: string
  ){
  }
}

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

 appleList:[Apple];
 apple: Apple;

  constructor() { 
    this.apple = {name:'', color: ''};
    this.appleList = [ {name: 'granny', color: 'green'},
  {name: 'delicious', color: 'deep red'},
   {name: 'crab', color:'crab'}
   ];
  }

  addApple(){
   
    this.appleList.push(this.apple);
    this.apple = {name:'', color: ''};

  }

  ngOnInit() {
  }

}
