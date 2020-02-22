import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomSearchItem } from '../models/roomsearchitem';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'Application/JSON'
  })
}

@Injectable({
  providedIn: 'root'
})

export class SearchservService {

  constructor(private http:HttpClient) { }

  searchURL:string = 'https://hms-back-end.herokuapp.com/search';

  searchRooms(searchItem:RoomSearchItem ):Observable<any>
{
  console.log("submitted")
  console.log(this.http.post<any>(this.searchURL,searchItem,httpOptions))
    return this.http.post<RoomSearchItem>(this.searchURL,searchItem,httpOptions);
}
}
