import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingForm } from '../models/bookingform';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/JSON'
  })
}

@Injectable({
  providedIn: 'root'
})

export class BookservService {

  constructor(private http: HttpClient) { }

  bookURL: string = 'https://hms-back-end.herokuapp.com/book';

  bookrooms(booking: BookingForm): Observable<any> {
    console.log("booked")
    return this.http.post<BookingForm>(this.bookURL, booking, httpOptions);
  }
  //make a get room info properly
  getRoomInfo(inroomname: string): Observable<any> {
    return this.http.get<any>(this.bookURL, inroomname, httpOptions)
  }
}
