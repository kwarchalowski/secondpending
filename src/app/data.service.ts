import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getElements(): Observable<any[]> {
    const url = 'https://gorest.co.in/public/v2/todos';
    return this.http.get<any[]>(url);
  }
}