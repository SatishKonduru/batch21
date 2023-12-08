import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
public URL = environment.apiUrl
  constructor(private _http: HttpClient) { }

  getDetails(){
  return  this._http.get(this.URL+'/dashboard/details')
  }

}
