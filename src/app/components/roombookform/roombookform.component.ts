import { Component, OnInit, Input } from '@angular/core';
import { BookservService } from '../../services/bookserv.service'
import { BookingForm } from '../../models/bookingform'
import { Router } from '@angular/router'
import * as RoomInfo from '../../roominfo';

@Component({
  selector: 'app-roombookform',
  templateUrl: './roombookform.component.html',
  styleUrls: ['./roombookform.component.sass']
})
export class RoombookformComponent implements OnInit {

  url_string = window.location.href;
  url = new URL(this.url_string);
  startdate = this.url.searchParams.get("startdate");
  enddate = this.url.searchParams.get("enddate");
  roomname = this.url.searchParams.get("roomname");
  available = RoomInfo.getAvailable(this.roomname);
  constructor(private bookservService: BookservService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    //get pid from account
    let booking: BookingForm = {
      "pid": 0,// get actual account pid,
      "startdate": this.startdate,
      "enddate": this.enddate,
      "roomnum": this.available

    }
    this.bookservService.bookrooms(booking).subscribe((res) => {
      console.log(res)

    });
  }
}
