import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './page/login/login.component';
import { SharedModule } from './share/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/error-handler.interceptor';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { UsersComponent } from './page/users/users.component';
import { HttpTokenInterceptor } from './interceptors/http-token.interceptor';
import { UserDetailComponent } from './page/user-detail/user-detail.component';
import { ChartsModule } from 'ng2-charts';
import { MembershipLevelComponent } from './page/membership-level/membership-level.component';
import { ChartComponent } from './component/chart/chart.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { FooterComponent } from './component/footer/footer.component';
import { ButtonComponent } from './component/button/button.component';
import { ConfirmUpdateMembershipComponent } from './page/confirm-update-membership/confirm-update-membership.component';
import { TransactionComponent } from './page/transaction/transaction.component';
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
    ChartsModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
