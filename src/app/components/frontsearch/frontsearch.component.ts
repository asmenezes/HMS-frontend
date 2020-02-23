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
    today1 = new Date()
    today = this.today1
    mindate1 = new Date()
    mindate = this.mindate1
  searchItem:RoomSearchItem = {
     startdate: `${this.today.getFullYear()}-${this.today.getMonth()}-${this.today.getDate()}`,
     enddate:  `${this.mindate.getFullYear()}-${this.mindate.getMonth()}-${this.mindate.getDate()}`,
     maxguests:  1,
     maxpets:  0
   }
//`${this.today.getFullYear()}/${this.today.getMonth()}/${this.today.getDate()}`

  constructor(private searchService:SearchservService) { }

  ngOnInit(): void {
    console.log(this.searchItem.startdate)
  }

  onSubmit(){
    let todaypad;
    let mindatepad;
    let mindatepad2;
    let datepad;

    if(this.today.getMonth() > 9){
    todaypad = ''
    }else{
  todaypad = '0'
    }
    if(this.today.getDate() > 9){
      datepad = ''
    }else{
    datepad = '0'
    }
    if(this.mindate.getMonth() > 9){
    mindatepad= ''
    }else{
    mindatepad = '0'
    }
    if(this.mindate.getDate() > 9){
    mindatepad2 = ''
    }else{
    mindatepad2 = '0'
    }
    window.location.href = `search/?startdate=${this.today.getFullYear()}-${todaypad}${this.today.getMonth() + 1}-${datepad}${this.today.getDate()}&enddate=${this.mindate.getFullYear()}-${mindatepad}${this.mindate.getMonth() + 1}-${mindatepad2}${this.mindate.getDate()}&maxguests=${this.searchItem.maxguests}&maxpets=${this.searchItem.maxpets}`

  }

}
