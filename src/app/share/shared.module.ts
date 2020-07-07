import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppMaterialModule} from './material.module';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
  ]
})
export class SharedModule {
}
