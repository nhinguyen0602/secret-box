import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { BarChartComponent } from './components/chart/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/chart/pie-chart/pie-chart.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewNotificationComponent } from './components/new-notification/new-notification.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HttpErrorInterceptor } from './interceptors/error-handler.interceptor';
import { HttpTokenInterceptor } from './interceptors/http-token.interceptor';
import { StatisticalComponent } from './page/statistical/statistical.component';
import { ConfirmUpdateMembershipComponent } from './pages/confirm-update-membership/confirm-update-membership.component';
import { LoginComponent } from './pages/login/login.component';
import { MembershipLevelComponent } from './pages/membership-level/membership-level.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UsersComponent } from './pages/users/users.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserDetailComponent,
    PieChartComponent,
    MembershipLevelComponent,
    ConfirmDialogComponent,
    SidenavComponent,
    FooterComponent,
    ButtonComponent,
    ConfirmUpdateMembershipComponent,
    TransactionComponent,
    NewNotificationComponent,
    BarChartComponent,
    StatisticalComponent,
    DatePickerComponent,
  ],
  entryComponents: [
    ConfirmUpdateMembershipComponent,
    ConfirmDialogComponent,
    UserDetailComponent,
    NewNotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    LoadingBarHttpClientModule,
    TabsModule.forRoot(),
    Ng2SearchPipeModule,
    FormsModule,
    NgbPaginationModule,
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
