import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roombook',
  templateUrl: './roombook.component.html',
  styleUrls: ['./roombook.component.sass']
})
export class RoombookComponent implements OnInit {

roomname:string;
roomdesc:string;

  constructor() { }

  ngOnInit(): void {
  }

}
