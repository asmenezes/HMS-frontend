import { Component, OnInit, Input } from '@angular/core';
import { SearchservService} from '../../services/searchserv.service';
import { RoomSearchItem } from '../../models/roomsearchitem';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import  * as SearchVariables from '../../searchvariables';

@Component({
  selector: 'app-mainresults',
  templateUrl: './mainresults.component.html',
  styleUrls: ['./mainresults.component.sass']
})
export class MainresultsComponent implements OnInit {
  search(e){
console.log(e)
  };
  // url_string = window.location.href; //window.location.href
  // url = new URL(this.url_string);

  searchItem:RoomSearchItem = {
    startdate: SearchVariables.getSearchSD(),
    enddate: SearchVariables.getSearchED(),
    maxguests: SearchVariables.getSearchMaxGuests(),
    maxpets: SearchVariables.getSearchMaxpets(),
    hasmicro: SearchVariables.getSearchHasMicro(),
    haskitch: SearchVariables.getSearchHasKitch(),
    hasfridge: SearchVariables.getSearchHasFridge(),
    hascouch: SearchVariables.getSearchHasCouch()
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
