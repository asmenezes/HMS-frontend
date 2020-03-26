import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RoomSearchItem } from '../../models/roomsearchitem';
import { Router } from '@angular/router'
import  * as Variables from '../../variables'

import { HttpClientModule } from '@angular/common/http';
import { SearchservService} from '../../services/searchserv.service'

@Component({
  selector: 'app-frontsearch',
  templateUrl: './frontsearch.component.html',
  styleUrls: ['./frontsearch.component.sass']
})


export class FrontsearchComponent implements OnInit {

@Output() searchBookings: EventEmitter<RoomSearchItem> = new EventEmitter();


  constructor(private searchService:SearchservService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.searchItem.startdate)
  }

  onSubmit(){

    let params = {
      startdate: this.searchItem.startdate,
      enddate: this.searchItem.enddate,
      maxguests: this.searchItem.maxguests,
      maxpets: this.searchItem.maxpets
    };

    this.router.navigate(['/search'], { queryParams: params });

  }

}
