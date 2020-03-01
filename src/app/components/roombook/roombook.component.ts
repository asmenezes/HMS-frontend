import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roombook',
  templateUrl: './roombook.component.html',
  styleUrls: ['./roombook.component.sass']
})
export class RoombookComponent implements OnInit {
  url_string = window.location.href; //window.location.href
  url = new URL(this.url_string);
roomname:string = this.url.searchParams.get("roomname");
roomdesc:string ;

  constructor() { }

  ngOnInit(): void {
  }

}
