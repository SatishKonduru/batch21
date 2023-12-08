import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public URL = environment.apiUrl; //localhost:8080
  constructor(private _http: HttpClient) { }


  signup(data: any): Observable<any>{ 
  return  this._http.post(this.URL+'/user/signup', data, {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }) 
  }


  forgotPassword(data: any): Observable<any>{
    return this._http.post(this.URL+'/user/forgotPassword', data,{
      headers: new HttpHeaders().set('Content-Type','application/json')
    }) 
  }

  login(data: any): Observable<any>{
    return this._http.post(this.URL+'/user/login', data, {
      headers: new HttpHeaders().set('Content-Type','application/json')
    })
  }

  checkToken(){
   return this._http.get(this.URL+'/user/checkToken')
  }

  
}
