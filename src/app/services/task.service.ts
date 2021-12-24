import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VariableSession } from '../constant/variablesession';
import { LoadscriptService } from './loadscript.service';
import decode from 'jwt-decode';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { Auth } from '../Interfaces/Auth.interface';
import { Tokens } from '../Interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlBase = environment.urlIdentity;

  constructor(private http: HttpClient, private loadscript: LoadscriptService) { }

  Authentication(auth:Auth): Observable<boolean>{
    debugger;
    this.doLogoutUser();
    return this.http.post<any>(`${this.urlBase}Identity/authentication`, auth)
    .pipe(
      tap( tokens =>{
        if (tokens.succeeded) {
          this.doLoginUser(auth.email, tokens)
        } else {
          throw tokens;
        }
      } ),
      mapTo(true),
      catchError(error => {
        throw error;
      })
    );
  }
  
  public GetIdUser() {
    return parseInt(this.loadscript.Decrypt(localStorage.getItem(VariableSession.IdAccount)));
  }

  loggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem(VariableSession.JWT_TOKEN);
  }

  public Logout(){
    this.removeTokens();
    return true;
  }
  private removeTokens() {
    localStorage.removeItem(VariableSession.IdAccount);
    localStorage.removeItem(VariableSession.Role);
    localStorage.removeItem(VariableSession.LastName);
    localStorage.removeItem(VariableSession.JWT_TOKEN);
    localStorage.removeItem(VariableSession.FirstName);
    localStorage.removeItem(VariableSession.Email);
  }

  private doLoginUser(username: string, tokens: Tokens) {
    localStorage.setItem(VariableSession.Email, this.loadscript.Encrypt(username));
    this.storeTokens(tokens);
  }

  public doLogoutUser() {
    this.removeTokens();
  }
  public GetUserName() {
    return this.loadscript.Decrypt(localStorage.getItem(VariableSession.Email));
  }
  public AccountId() {
    return parseInt(this.loadscript.Decrypt(localStorage.getItem(VariableSession.IdAccount)));
  }

  public GetRole() {
    return this.loadscript.Decrypt(localStorage.getItem(VariableSession.Role));
  }

  private storeTokens(tokens: Tokens) {

    let decodotken = decode(tokens.accessToken);
    localStorage.setItem(VariableSession.IdAccount, this.loadscript.Encrypt(decodotken['nameid']));
    localStorage.setItem(VariableSession.Role, this.loadscript.Encrypt(decodotken['role']));
    localStorage.setItem(VariableSession.LastName, this.loadscript.Encrypt(decodotken['family_name']));
    localStorage.setItem(VariableSession.FirstName, this.loadscript.Encrypt(decodotken['unique_name']));
    localStorage.setItem(VariableSession.JWT_TOKEN, tokens.accessToken);

  }  
}

