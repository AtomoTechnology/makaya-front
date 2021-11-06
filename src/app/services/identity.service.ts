import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IUser } from '../Interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  constructor(private http: HttpClient) {}

  get() {}
}
