import { Component, OnInit, Input } from '@angular/core';
import { BookservService} from '../../services/bookserve.service'
import { BookingForm } from '../../models/bookingform'
import { Router } from '@angular/router'

@Component({
  selector: 'app-roombookform',
  templateUrl: './roombookform.component.html',
  styleUrls: ['./roombookform.component.sass']
})
export class RoombookformComponent implements OnInit {

  url_string = window.location.href;
  url = new URL(this.url_string);
  startdate =  this.url.searchParams.get("startdate");
  enddate = this.url.searchParams.get("enddate");
  roomname =  this.url.searchParams.get("roomname");
  available= this.url.searchParams.get("available");

  constructor() { }

  ngOnInit(): void {

  }

}
