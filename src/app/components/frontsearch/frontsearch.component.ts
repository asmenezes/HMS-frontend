import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RoomSearchItem } from '../../models/roomsearchitem';

import { HttpClientModule } from '@angular/common/http';
import { SearchservService} from '../../services/searchserv.service'

@Component({
  selector: 'app-frontsearch',
  templateUrl: './frontsearch.component.html',
  styleUrls: ['./frontsearch.component.sass']
})

  //public searchItem:RoomSearchItem = {};

//on submit to create search item, then route to search results and pass item

export class FrontsearchComponent implements OnInit {

@Output() searchBookings: EventEmitter<RoomSearchItem> = new EventEmitter();

  searchItem:RoomSearchItem = {
     startdate:  "",
     enddate:  "",
     maxguests:  1,
     maxpets:  0
   }


  constructor(private searchService:SearchservService) { }

  ngOnInit(): void {
    //console.log(this.searchItem)
  }

  onSubmit(){
    window.location.href = `search/?startdate=${this.searchItem.startdate}&enddate=${this.searchItem.enddate}&maxguests=${this.searchItem.maxguests}&maxpets=${this.searchItem.maxpets}`

  }

}
