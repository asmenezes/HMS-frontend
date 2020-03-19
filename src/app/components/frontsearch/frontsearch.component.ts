import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RoomSearchItem } from '../../models/roomsearchitem';
import { Router } from '@angular/router'

import { HttpClientModule } from '@angular/common/http';
import { SearchservService} from '../../services/searchserv.service'

@Component({
  selector: 'app-frontsearch',
  templateUrl: './frontsearch.component.html',
  styleUrls: ['./frontsearch.component.sass']
})


export class FrontsearchComponent implements OnInit {

@Output() searchBookings: EventEmitter<RoomSearchItem> = new EventEmitter();
  dateob = new Date()
  today:String = `${this.dateob.getFullYear()}-${(this.dateob.getMonth()+1).toString().padStart(2,"0")}-${this.dateob.getDate().toString().padStart(2,"0")}`;

  dateob2 = new Date(this.dateob.setDate(this.dateob.getDate() + 1));

  tomorrow:String = `${this.dateob2.getFullYear()}-${(this.dateob2.getMonth()+1).toString().padStart(2,"0")}-${this.dateob2.getDate().toString().padStart(2,"0")}`;
  
  searchItem:RoomSearchItem = {
     startdate: this.today,
     enddate:  this.tomorrow,
     maxguests:  1,
     maxpets:  0
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

    this.router.navigate(['/search'], { queryParams: params });

  }

}
