import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from './pservice';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PserviceService {

  private _url="https://localhost:44349/api/Doctors";
  

  constructor(private http:HttpClient) { }

  
  getDoctor():Observable<IProject[]>
  {
    console.log("Hi");
    return this.http.get<IProject[]>(this._url);
}
}
