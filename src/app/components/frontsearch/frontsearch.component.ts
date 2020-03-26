import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RoomSearchItem } from '../../models/roomsearchitem';
import { Router } from '@angular/router'
import  * as SearchVariables from '../../searchvariables'

import { HttpClientModule } from '@angular/common/http';
import { SearchservService} from '../../services/searchserv.service'

@Component({
  selector: 'app-frontsearch',
  templateUrl: './frontsearch.component.html',
  styleUrls: ['./frontsearch.component.sass']
})


export class FrontsearchComponent implements OnInit {

@Output() searchBookings: EventEmitter<RoomSearchItem> = new EventEmitter();
  searchItem:RoomSearchItem = {
    startdate: SearchVariables.getSearchSD(),
    enddate: SearchVariables.getSearchED(),
    maxguests: SearchVariables.getSearchMaxGuests(),
    maxpets: SearchVariables.getSearchMaxpets()
  }

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
    SearchVariables.setSearchSD(params.startdate);
    SearchVariables.setSearchED(params.enddate);
    SearchVariables.setSearchMaxGuests(params.maxguests);
    SearchVariables.setSearchMaxpets(params.maxpets);

    this.router.navigate(['/search'], { queryParams: params });

  }

}
