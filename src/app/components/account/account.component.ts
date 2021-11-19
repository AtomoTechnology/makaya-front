import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  
  accountForm = new  FormGroup({});

  constructor(
    private taskService: TaskService,
    private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm():void{
    this.accountForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  isValidField(field: string): string{
    const validatedField = this.accountForm.get(field);
    return(!validatedField.valid && validatedField.touched) ?
      'is-invalid': validatedField.touched ? 'is-valid':'';
  }

  OnSubmit() {
    debugger;
    if(this.accountForm.valid) {
      this.taskService.Authentication(this.accountForm.value).subscribe(
        (success) => {
          if (success) {
              this.router.navigate(['/browse']);
            }else {
              this.router.navigate(['/Error']);
            }
        },
        (err: any) => {
          debugger;
          // $('.errmessage').html(err.response.message);
        }
      );
    }
  }

}
