import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { BrowserComponent } from './components/browser/browser.component';
import { FooterComponent } from './components/footer/footer.component';
import { MailComponent } from './components/subscribe/mail/mail.component';
import { PasswordComponent } from './components/subscribe/password/password.component';
import { PaymentCardComponent } from './components/subscribe/payment-card/payment-card.component';
import { MenuComponent } from './components/menu/menu.component';
import { MediaComponent } from './components/media/media.component';
import { MediasComponent } from './components/medias/medias.component';
// import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    BrowserComponent,
    FooterComponent,
    MailComponent,
    PasswordComponent,
    PaymentCardComponent,
    MenuComponent,
    MediaComponent,
    MediasComponent,
    // CarouselModule,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
