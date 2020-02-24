import { Component, OnInit, Input } from '@angular/core';
import { SearchservService} from '../../services/searchserv.service'
import { RoomSearchItem } from '../../models/roomsearchitem'
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-mainresults',
  templateUrl: './mainresults.component.html',
  styleUrls: ['./mainresults.component.sass']
})
export class MainresultsComponent implements OnInit {
  search(e){
console.log(e)
  };
  url_string = window.location.href; //window.location.href
  url = new URL(this.url_string);

    today1 = new Date(this.url.searchParams.get("startdate"))
    today = this.today1
    mindate1 = new Date(this.url.searchParams.get("enddate"))
    mindate = this.mindate1
  searchItem:RoomSearchItem = {
//get params from url
   startdate:  this.url.searchParams.get("startdate"),
   enddate:  this.url.searchParams.get("enddate"),
    maxguests:  Number(this.url.searchParams.get("maxguests")),
    maxpets:  Number(this.url.searchParams.get("maxpets")),
    nightlycost:900,
    hasmicro: (this.url.searchParams.get("hasmicro") == "true")?  (this.url.searchParams.get("hasmicro") == "true") : false,
    haskitch: (this.url.searchParams.get("haskitch") == "true")?  (this.url.searchParams.get("haskitch") == "true") : false,
    hasfridge: (this.url.searchParams.get("hasfridge") == "true")?  (this.url.searchParams.get("hasfridge") == "true") : false,
    hascouch: (this.url.searchParams.get("hascouch") == "true")?  (this.url.searchParams.get("hascouch") == "true") : false
  }


// searchItem:RoomSearchItem = {
//    startdate: `${this.today.getFullYear()}-${this.today.getMonth()}-${this.today.getDate()}`,
//    enddate:  `${this.mindate.getFullYear()}-${this.mindate.getMonth()}-${this.mindate.getDate()}`,
//    maxguests:  1,
//    maxpets:  0
//  }

  constructor(private searchService:SearchservService,private router:Router) { }

  ngOnInit(): void {
   this.searchService.searchRooms(this.searchItem).subscribe((res) => {
     console.log(res)
   });
  }
  onSubmit(){
    console.log("submitted")
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

    let params = {
      startdate: `${this.today.getFullYear()}-${todaypad}${this.today.getMonth() + 1}-${datepad}${this.today.getDate() + 1}`,
      enddate: `${this.mindate.getFullYear()}-${mindatepad}${this.mindate.getMonth() + 1}-${mindatepad2}${this.mindate.getDate() + 1}`,
      maxguests: this.searchItem.maxguests,
      maxpets: this.searchItem.maxpets
    };

    this.router.navigate(['/search'], { queryParams: params });
  }


}
