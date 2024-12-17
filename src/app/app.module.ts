import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { InbuiltPipesComponent } from './inbuilt-pipes/inbuilt-pipes.component';
import { PersonPipe } from './person.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { TempRefVarComponent } from './temp-ref-var/temp-ref-var.component';
import { ParentComponent } from './parent--to-child-communication/parent/parent.component';
import { ChildComponent } from './parent--to-child-communication/child/child.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table/dynamic-table.component';
import { TableComponent } from './dynamic-table/table/table.component';
import { TabComponent } from './child-to-parent-communication/tab/tab.component';
import { DynamicTabComponent } from './child-to-parent-communication/dynamic-tab/dynamic-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgIfDirectiveComponent,
    NgForDirectiveComponent,
    CounterAppComponent,
    NgSwitchComponent,
    InbuiltPipesComponent,
    PersonPipe,
    CustomPipeComponent,
    TempRefVarComponent,
    ParentComponent,
    ChildComponent,
    DynamicTableComponent,
    TableComponent,
    TabComponent,
    DynamicTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }