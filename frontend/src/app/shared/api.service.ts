import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams ,HttpErrorResponse} from '@angular/common/http';
import { throwError as ObservableThrowError, Observable, of ,BehaviorSubject} from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { ENV } from './env.config';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

    /**
     * Login/register/user details api
     */

    //POST USER LOGIN
    userSignIn(userData :any): Observable<any> {
        var Udata = {"username":userData.username,
                    "password":userData.password}
    
        return this.http.post<any>(`${ENV.BASE_API}/user-api/login`,Udata).pipe(
        
        );
        }
    
    //POST USER REGISTER
    userSignUp(userData :any): Observable<any> {
      console.log(userData);
      var Udata = {"username":userData.username,
                   "email":userData.email,
                   "phone":userData.username,
                  "password":userData.password}
  
      return this.http.post<any>(`${ENV.BASE_API}/user-api/register`,Udata).pipe(
      
      );
      }

}