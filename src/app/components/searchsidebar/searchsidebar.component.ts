import { Component, OnInit, Input } from '@angular/core';
import { RoomSearchItem } from '../../models/roomsearchitem'
import { HttpClientModule } from '@angular/common/http';
import { SearchservService} from '../../services/searchserv.service'

@Component({
  selector: 'app-searchsidebar',
  templateUrl: './searchsidebar.component.html',
  styleUrls: ['./searchsidebar.component.sass']
})
export class SearchsidebarComponent implements OnInit {

   url_string = window.location.href; //window.location.href
   url = new URL(this.url_string);

  searchItem:RoomSearchItem = {
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



  constructor(private searchService:SearchservService) { }

  ngOnInit(): void {
    this.searchService.searchRooms(this.searchItem).subscribe((res) => {
      console.log(res)
    });
  }
  onSubmit(){
    window.location.href = `search/?startdate=${this.searchItem.startdate}&enddate=${this.searchItem.enddate}&maxguests=${this.searchItem.maxguests}&maxpets=${this.searchItem.maxpets}&hasmicro=${this.searchItem.hasmicro}&haskitch=${this.searchItem.haskitch}&hasfridge=${this.searchItem.hasfridge}&hascouch=${this.searchItem.hascouch}`

  }

}
