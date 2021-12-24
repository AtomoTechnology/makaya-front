import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserComponent } from './components/browser/browser.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MediaComponent } from './components/media/media.component';
import { MediasComponent } from './components/medias/medias.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { appRoutes } from './components/routeprincipal/route';
import { RouterModule } from '@angular/router';
import { PlanComponent } from './components/plan/plan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent, HomeComponent,
    BrowserComponent,FooterComponent, MenuComponent,
    MediaComponent,MediasComponent, PlanComponent
  ],
  imports: [
    BrowserModule,MaterialModule,
    RouterModule.forRoot(appRoutes, 
      { 
        relativeLinkResolution: 'legacy' ,
        // enableTracing: true,
        // preloadingStrategy: PreloadAllModules
      }),HttpClientModule, BrowserAnimationsModule
  ],
  providers: [Title, {provide:JWT_OPTIONS, useValue:JWT_OPTIONS},JwtHelperService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
 }],
  bootstrap: [AppComponent],
  exports:[RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
