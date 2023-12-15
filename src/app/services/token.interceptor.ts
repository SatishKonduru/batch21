import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {




  constructor(private _router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let tokenizedRequest : any;
    const token = localStorage.getItem('token')
    if(token){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(request).pipe(catchError((err)=>{
        if(err instanceof HttpErrorResponse){
          console.log(err.url)
          if(err.status === 401  || err.status === 403){
            if(this._router.url === '/'){}
            else{
              localStorage.clear()
              this._router.navigate(['/'])
            }
          } 
        }
        return throwError(err)
      }))
  


  }
}
