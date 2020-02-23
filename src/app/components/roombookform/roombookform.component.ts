import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roombookform',
  templateUrl: './roombookform.component.html',
  styleUrls: ['./roombookform.component.sass']
})
export class RoombookformComponent implements OnInit {

  url_string = window.location.href; //window.location.href
  url = new URL(this.url_string);
  startdate =  this.url.searchParams.get("startdate");
  enddate = this.url.searchParams.get("enddate");
  roomname =  this.url.searchParams.get("roomname");

  constructor() { }

  ngOnInit(): void {

  }

}
