import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModuleC1Component } from './test-module-c1/test-module-c1.component';



@NgModule({
  declarations: [
    TestModuleC1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [TestModuleC1Component]
})
export class TestModuleModule { }
