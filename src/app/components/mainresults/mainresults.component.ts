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


  constructor(private searchService:SearchservService,private router:Router) { }

  ngOnInit(): void {
   this.searchService.searchRooms(this.searchItem).subscribe((res) => {
     console.log(res)
   });
  }
  onSubmit(){

    let params = {
      startdate: this.searchItem.startdate,
      enddate: this.searchItem.enddate,
      maxguests: this.searchItem.maxguests,
      maxpets: this.searchItem.maxpets
    };


    // this.router.navigate(['/search'], { queryParams: params });
    this.searchService.searchRooms(this.searchItem).subscribe((res) => {
      console.log(res)

    });
  }


}
