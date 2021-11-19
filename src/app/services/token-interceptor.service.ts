import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor  {

  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: TaskService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let token = this.authService.getJwtToken();
    if(token){
        req = this.addToken(req, token);
    }
    return next.handle(req).pipe(catchError(error =>{
      if(error instanceof HttpErrorResponse && error.statusText !== 'Unauthorized'){
        return this.handle401Error(req, next);
      }
      else{
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token:string){
    return request.clone({
      setHeaders:{
        'Authorization': `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler){
    return this.refreshTokenSubject.pipe(
      filter( token => token != null),
      take(1),
      switchMap( jwt =>{
        return next.handle(this.addToken(request, jwt))
      })
    );
  }
}
