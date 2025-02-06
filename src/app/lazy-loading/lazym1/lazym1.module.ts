import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazym1RoutingModule } from './lazym1-routing.module';
import { Lazym1Comp1Component } from './lazym1-comp1/lazym1-comp1.component';


@NgModule({
  declarations: [
    Lazym1Comp1Component
  ],
  imports: [
    CommonModule,
    Lazym1RoutingModule
  ]
})
export class Lazym1Module { }
