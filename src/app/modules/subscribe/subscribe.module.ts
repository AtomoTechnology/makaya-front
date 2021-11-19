import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribeRoutingModule } from './subscribe-routing.module';
import { MailComponent } from 'src/app/components/subscribe/mail/mail.component';
import { PasswordComponent } from 'src/app/components/subscribe/password/password.component';
import { PaymentCardComponent } from 'src/app/components/subscribe/payment-card/payment-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    MailComponent,PaymentCardComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    SubscribeRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class SubscribeModule { }
