import { Component, OnInit, Input } from '@angular/core';
import { RoomResult } from '../../models/roomresult';
import { HttpClientModule } from '@angular/common/http';
import { SearchservService} from '../../services/searchserv.service'
import { RoomSearchItem } from '../../models/roomsearchitem'
import { Router } from '@angular/router'

@Component({
  selector: 'app-resultitem',
  templateUrl: './resultitem.component.html',
  styleUrls: ['./resultitem.component.sass']
})
export class ResultitemComponent implements OnInit {
  // @Input() results:RoomResult
results:RoomResult[];
url_string = window.location.href; //window.location.href
url = new URL(this.url_string);

searchItem:RoomSearchItem = {
 startdate:  this.url.searchParams.get("startdate"),
 enddate:  this.url.searchParams.get("enddate"),
  maxguests:  Number(this.url.searchParams.get("maxguests")),
  maxpets:  Number(this.url.searchParams.get("maxpets")),
  nightlycost:900,
  hasmicro:false,
  haskitch:false,
  hasfridge:false,
  hascouch:false
}

book(roomname:string) {
      // window.location.href = `book/?startdate=${this.searchItem.startdate}&enddate=${this.searchItem.enddate}&roomname=${roomname}`
      let params = {
        startdate: this.searchItem.startdate,
        enddate: this.searchItem.enddate,
        maxguests: this.searchItem.maxguests,
        maxpets: this.searchItem.maxpets,
        roomname: roomname
      };

      this.router.navigate(['/book'], { queryParams: params });
      //add room type
}
constructor(private searchService:SearchservService,private router:Router) { }

ngOnInit(): void {
  this.searchService.searchRooms(this.searchItem).subscribe((res) => {
    this.results = res
    console.log(this.results)
  });
}

}
