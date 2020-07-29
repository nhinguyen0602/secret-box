import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { UsersComponent } from './page/users/users.component';
import { TransactionComponent } from './page/transaction/transaction.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/users' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'transactions',
    component: TransactionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
