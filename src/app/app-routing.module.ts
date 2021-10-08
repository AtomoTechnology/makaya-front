import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { BrowserComponent } from './components/browser/browser.component';
import { HomeComponent } from './components/home/home.component';
import { MailComponent } from './components/subscribe/mail/mail.component';
import { PasswordComponent } from './components/subscribe/password/password.component';
import { PaymentCardComponent } from './components/subscribe/payment-card/payment-card.component';
import { WelcomeComponent } from './components/subscribe/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/home`,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'home' },
  },
  {
    path: 'login',
    component: AccountComponent,
    data: { title: 'login' },
  },
  {
    path: 'subscribe',
    component: MailComponent,
    data: { title: 'subscribe' },
  },
  {
    path: 'password',
    component: PasswordComponent,
    data: { title: 'password' },
  },
  {
    path: 'payment-method',
    component: PaymentCardComponent,
    data: { title: 'payment-method' },
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { title: 'welcome' },
  },
  {
    path: 'browse',
    component: BrowserComponent,
    data: { title: 'browse' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
