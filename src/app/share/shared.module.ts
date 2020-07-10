import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppMaterialModule} from './material.module';
import {RouterModule} from '@angular/router';
import { SnackBarComponent } from './component/snack-bar/snack-bar.component';
@NgModule({
  declarations: [
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
  ],
  exports: [
    AppMaterialModule,
  ]
})
export class SharedModule {
}
