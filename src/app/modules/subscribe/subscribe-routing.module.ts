import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanComponent } from 'src/app/components/plan/plan.component';
import { MailComponent } from 'src/app/components/subscribe/mail/mail.component';
import { PasswordComponent } from 'src/app/components/subscribe/password/password.component';
import { PaymentCardComponent } from 'src/app/components/subscribe/payment-card/payment-card.component';

const routes: Routes = [
  {
    path: '',
    component: MailComponent,
    data: {
      title: 'Subscribe'
    }
  },
  {
    path: 'password',
    component: PasswordComponent,
    data: { title: 'password' },
  },
  {
    path: 'plan',
    component: PlanComponent,
    data: { title: 'plan' },
  },
  {
    path: 'payment-method',
    component: PaymentCardComponent,
    data: { title: 'payment-method' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscribeRoutingModule { }
