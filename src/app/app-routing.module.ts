import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticalComponent } from './page/statistical/statistical.component';
import { LoginComponent } from './pages/login/login.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/users' },
  {
    path: 'login',
    // tslint:disable-next-line:object-literal-sort-keys
    component: LoginComponent,
  },
  {
    path: 'users',
    // tslint:disable-next-line:object-literal-sort-keys
    component: UsersComponent,
  },
  {
    path: 'transactions',
    // tslint:disable-next-line:object-literal-sort-keys
    component: TransactionComponent,
  },
  {
    path: 'statistical',
    // tslint:disable-next-line:object-literal-sort-keys
    component: StatisticalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // tslint:disable-next-line:object-literal-sort-keys
  exports: [RouterModule],
})
export class AppRoutingModule { }
