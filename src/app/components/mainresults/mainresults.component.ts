import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainresults',
  templateUrl: './mainresults.component.html',
  styleUrls: ['./mainresults.component.sass']
})
export class MainresultsComponent implements OnInit {
  search(e){
console.log(e)
  };
searchBookings(){

}
  constructor() { }

  ngOnInit(): void {
  }

}
