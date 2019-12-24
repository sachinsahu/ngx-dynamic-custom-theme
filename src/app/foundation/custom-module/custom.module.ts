/**
 * Custom Module
 * Module to share globally
 **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom-component/custom-component.component';

@NgModule({
  declarations: [CustomComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CustomComponent
  ]
})
export class FnCustomModule {
  public static forRoot() {
    return {
      ngModule: FnCustomModule
    }
  }
  public static forChild() {
    return {
      ngModule: FnCustomModule
    }
  }
}