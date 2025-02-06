import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazym1Comp1Component } from './lazym1-comp1/lazym1-comp1.component';

const routes: Routes = [
  { path: "", component: Lazym1Comp1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazym1RoutingModule { }
