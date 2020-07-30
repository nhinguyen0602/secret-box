import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import { ChartComponent } from './component/chart/chart.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HttpErrorInterceptor } from './interceptors/error-handler.interceptor';
import { HttpTokenInterceptor } from './interceptors/http-token.interceptor';
import { ConfirmUpdateMembershipComponent } from './page/confirm-update-membership/confirm-update-membership.component';
import { LoginComponent } from './page/login/login.component';
import { MembershipLevelComponent } from './page/membership-level/membership-level.component';
import { TransactionComponent } from './page/transaction/transaction.component';
import { UserDetailComponent } from './page/user-detail/user-detail.component';
import { UsersComponent } from './page/users/users.component';
import { SharedModule } from './share/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserDetailComponent,
    ChartComponent,
    MembershipLevelComponent,
    ConfirmDialogComponent,
    SidenavComponent,
    FooterComponent,
    ButtonComponent,
    ConfirmUpdateMembershipComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  // tslint:disable-next-line:object-literal-sort-keys
  bootstrap: [AppComponent],
})
export class AppModule { }
