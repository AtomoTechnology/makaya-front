import { Routes } from "@angular/router";
import { BrowserComponent } from "../browser/browser.component";
import { HomeComponent } from "../home/home.component";
import { WelcomeComponent } from "../subscribe/welcome/welcome.component";

export const appRoutes: Routes = [
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
      loadChildren: () => import('../../modules/account/account.module').then((p) => p.AccountModule)
    },
    {
      path: 'subscribe',
      loadChildren:() => import("../../modules/subscribe/subscribe.module").then((p) => p.SubscribeModule)
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
    {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full',
    }
  ];