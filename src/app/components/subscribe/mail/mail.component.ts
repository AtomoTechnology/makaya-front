import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscribeVariable } from 'src/app/constant/subscribeVariable';
import { IdentityService } from 'src/app/services/identity.service';
import { LocalstoragsubscribeService } from 'src/app/services/localstoragsubscribe.service';

declare var $: any;
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  mailtForm = new FormGroup({});
  private isEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  iserror:boolean = false;
  errmsg: string;

  constructor(private router: Router, private fb:FormBuilder, private identityservice: IdentityService,
    private lgservice: LocalstoragsubscribeService) {
    this.initForm(); }

  ngOnInit(): void {
  }
  
  private initForm():void{
    this.mailtForm = this.fb.group({
      email: ['',[Validators.required,Validators.pattern(this.isEmail),Validators.minLength(6)]]
    });
  }
  
  isValidField(field: string): string{
    const validatedField = this.mailtForm.get(field);
    let result = (!validatedField.valid && validatedField.touched) ?
    'is-invalid': validatedField.touched ? 'is-valid':'';
    return result;
  }

  OnSubmit() {
    if(this.mailtForm.valid) {
      this.identityservice.Post(this.mailtForm.value).subscribe(
        (result: any) => {
          debugger; 
          this.lgservice.SetLocalStorageSubscribe(result);
          this.router.navigate(['subscribe/password']);        
        },
        (err: HttpErrorResponse) => {
          this.router.navigate(['error']);  
        }
      );
    }
    else{
      $('.invalid-feedback').css({
        'display': 'inline'
      });
    }
  }

  CleanInput(){
    $('.invalid-feedback').css({
      'display': 'none'
    });
  }
}
