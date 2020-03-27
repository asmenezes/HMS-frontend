import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomSearchItem } from '../models/roomsearchitem';
import { RoomResult } from '../models/roomresult';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/JSON'
  })
}

@Injectable({
  providedIn: 'root'
})

export class SearchservService {

  @Output() searchResult: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.searchResult = new EventEmitter();
  }

  searchURL: string = 'https://hms-back-end.herokuapp.com/search';

  searchRooms(searchItem: RoomSearchItem): Observable<any> {
    this.http.post<RoomResult>(this.searchURL, searchItem, httpOptions).subscribe(res => {
      this.searchResult.emit(res);
      return res
    });
    return this.http.post<RoomResult>(this.searchURL, searchItem, httpOptions);
  }
}
