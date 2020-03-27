import { Component, OnInit, Input } from '@angular/core';
import { RoomResult } from '../../models/roomresult';
import { HttpClientModule } from '@angular/common/http';
import { SearchservService } from '../../services/searchserv.service';
import { RoomSearchItem } from '../../models/roomsearchitem';
import { Router } from '@angular/router';
import * as SearchVariables from '../../searchvariables';

@Component({
  selector: 'app-resultitem',
  templateUrl: './resultitem.component.html',
  styleUrls: ['./resultitem.component.sass']
})
export class ResultitemComponent implements OnInit {
  results: RoomResult[];

  searchItem: RoomSearchItem = {
    startdate: SearchVariables.getSearchSD(),
    enddate: SearchVariables.getSearchED(),
    maxguests: SearchVariables.getSearchMaxGuests(),
    maxpets: SearchVariables.getSearchMaxpets(),
    hasmicro: SearchVariables.getSearchHasMicro(),
    haskitch: SearchVariables.getSearchHasKitch(),
    hasfridge: SearchVariables.getSearchHasFridge(),
    hascouch: SearchVariables.getSearchHasCouch()
  }

  book(roomname: string, available: number[]) {
    let params = {
      startdate: this.searchItem.startdate,
      enddate: this.searchItem.enddate,
      maxguests: this.searchItem.maxguests,
      maxpets: this.searchItem.maxpets,
      roomname: roomname,
      available: available
    };

    this.router.navigate(['/book'], { queryParams: params });

  }
  constructor(private searchService: SearchservService, private router: Router) {
    this.searchService.searchResult.subscribe((result) => {
      this.onSearch(result);
    });
  }

  ngOnInit(): void {
    this.searchService.searchRooms(this.searchItem).subscribe((res) => {
      this.results = res
    });
  }
  onSearch(result): void {
    this.results = result
    // Add in result globals support
  }

}
