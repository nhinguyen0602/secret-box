import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { SnackBarComponent } from '../component/snack-bar/snack-bar.component';
import {AppMaterialModule} from './material.module';
@NgModule({
  declarations: [
    SnackBarComponent,
  ],
  entryComponents: [
    SnackBarComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
  ],
  // tslint:disable-next-line:object-literal-sort-keys
  exports: [
    AppMaterialModule,
  ],
})
export class SharedModule {
}
