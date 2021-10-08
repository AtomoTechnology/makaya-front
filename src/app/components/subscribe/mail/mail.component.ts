import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  emailValidation (e:any){
    e.preventDefault();
    this.route.navigate(['password']);
  }
}
