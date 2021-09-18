import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/home`,
    pathMatch: 'full',
  },{
    path: 'home',
    component: HomeComponent,
     data: {title: 'home'}
  }
  ,{
    path: 'login',
    component: AccountComponent,
     data: {title: 'login'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
