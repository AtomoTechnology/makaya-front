import { Injectable } from '@angular/core';
import { SubscribeVariable } from '../constant/subscribeVariable';
import { IUser } from '../Interfaces/user.interface';
import { LoadscriptService } from './loadscript.service';

@Injectable({
  providedIn: 'root'
})
export class LocalstoragsubscribeService {

  constructor(private loadscript: LoadscriptService) { }

  SetLocalStorageSubscribe(data: IUser){

    localStorage.setItem(SubscribeVariable.IdAccountSubscribe, this.loadscript.Encrypt(data.id));
    localStorage.setItem(SubscribeVariable.EmailSubscribe, this.loadscript.Encrypt(data.email));
    
  }

  GetDatosLocalStorageSubscribe(){

   let EmailSubscribe = this.loadscript.Decrypt(localStorage.getItem(SubscribeVariable.EmailSubscribe));
   let IdAccountSubscribe = this.loadscript.Decrypt(localStorage.getItem(SubscribeVariable.IdAccountSubscribe));

   return {EmailSubscribe, IdAccountSubscribe};
  }

  DeleteLocalStorageSubscribe(){

    localStorage.removeItem(SubscribeVariable.EmailSubscribe);
    localStorage.removeItem(SubscribeVariable.IdAccountSubscribe);
    localStorage.removeItem(SubscribeVariable.passSubscribe);

  }
}
