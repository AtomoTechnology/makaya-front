import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/services/identity.service';
import { LocalstoragsubscribeService } from 'src/app/services/localstoragsubscribe.service';
import { TaskService } from '../../../services/task.service';
import { Auth } from '../../../Interfaces/Auth.interface';

declare var $: any;
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  passForm = new FormGroup({});

  EmailSubscribe: string;
  IdAccountSubscribe: string;

  constructor( private router:Router, private fb:FormBuilder, private taskService: TaskService ,
    private identityservice: IdentityService, private lgservice: LocalstoragsubscribeService ) { }

    ngOnInit(): void {
      this.GetDatosSubscribe();
      this.initForm(); 
    }

    private GetDatosSubscribe(){
      let datas = this.lgservice.GetDatosLocalStorageSubscribe();
      this.EmailSubscribe =  datas.EmailSubscribe;
      this.IdAccountSubscribe =  datas.IdAccountSubscribe;
    }
    private initForm():void{
      this.passForm = this.fb.group({
        id:  this.IdAccountSubscribe,
        email: this.EmailSubscribe,
        password: ['',[Validators.required,Validators.minLength(6)]]
      });
    }
    
    isValidField(field: string): string{
      const validatedField = this.passForm.get(field);
      let result = (!validatedField.valid && validatedField.touched) ?
      'is-invalid': validatedField.touched ? 'is-valid':'';
      return result;
    }
  
    OnSubmit() {
      if(this.passForm.valid) {
        this.identityservice.Put(this.passForm.value).subscribe(
          (result: any) => {
           this.taskService.Authentication(this.passForm.value)
           .subscribe( resp =>{
              this.router.navigate(['subscribe/plan']); 
           });       
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
