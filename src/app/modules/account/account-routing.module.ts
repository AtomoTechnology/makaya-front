import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/app/components/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    data: { title: 'Account' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
