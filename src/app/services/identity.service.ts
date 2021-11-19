import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IUser } from '../Interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  constructor(private http: HttpClient) {}
  
  Post(data:IUser){
    return this.http.post(`${environment.urlIdentity}Identity`,data);
  }
  
  Put(data:IUser){
    return this.http.put(`${environment.urlIdentity}Identity`,data);
  }

}
