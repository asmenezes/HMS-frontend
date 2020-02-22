import { Component, OnInit, Input } from '@angular/core';
import { RoomResult } from '../../models/roomresult';
import { HttpClientModule } from '@angular/common/http';
import { SearchservService} from '../../services/searchserv.service'
import { RoomSearchItem } from '../../models/roomsearchitem'

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
constructor(private searchService:SearchservService) { }

ngOnInit(): void {
  this.searchService.searchRooms(this.searchItem).subscribe((res) => {
    // for(result in res){
    //   if (this.results.includes(result.roomnamee)){
    //     this.results.numavail += 1;
    //   }else{
    //     this.results.push({roomname:res.roomname, numavail: 1, rtid:res.rtid })
    //   }
    // }

    console.log(this.results)
  });
}

}
