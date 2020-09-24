import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TypicodeInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token: string = localStorage.getItem('userToken');
    
    if(token){
      const authReq = req.clone({
        headers: req.headers.append('Authorization','Bearer ' + token)
      })
      return next.handle(authReq);
     }else{
      const authReq = req.clone()
      return next.handle(authReq);
     }
     
  }
}

