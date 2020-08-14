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
import { ButtonComponent } from './component/button/button.component';
import { BarChartComponent } from './component/chart/bar-chart/bar-chart.component';
import { PieChartComponent } from './component/chart/pie-chart/pie-chart.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { DatePickerComponent } from './component/date-picker/date-picker.component';
import { FooterComponent } from './component/footer/footer.component';
import { NewNotificationComponent } from './component/new-notification/new-notification.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HttpErrorInterceptor } from './interceptors/error-handler.interceptor';
import { HttpTokenInterceptor } from './interceptors/http-token.interceptor';
import { ConfirmUpdateMembershipComponent } from './page/confirm-update-membership/confirm-update-membership.component';
import { LoginComponent } from './page/login/login.component';
import { MembershipLevelComponent } from './page/membership-level/membership-level.component';
import { StatisticalComponent } from './page/statistical/statistical.component';
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
