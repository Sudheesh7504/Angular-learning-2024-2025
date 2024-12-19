import { Component } from '@angular/core';
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { ClassBindingComponent } from "./class-binding/class-binding.component";
import { StyleBindingComponent } from "./style-binding/style-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { NgIfDirectiveComponent } from "./ng-if-directive/ng-if-directive.component";
import { NgForDirectiveComponent } from "./ng-for-directive/ng-for-directive.component";
import { CounterAppComponent } from "./counter-app/counter-app.component";
import { NgSwitchComponent } from "./ng-switch/ng-switch.component";
import { InbuiltPipesComponent } from "./inbuilt-pipes/inbuilt-pipes.component";
import { CustomPipeComponent } from "./custom-pipe/custom-pipe.component";
import { TempRefVarComponent } from "./temp-ref-var/temp-ref-var.component";
import { ParentComponent } from "./parent--to-child-communication/parent/parent.component";
import { TableComponent } from "./dynamic-table/table/table.component";
import { TabComponent } from "./child-to-parent-communication/tab/tab.component";
import { AgeCalculatorComponent } from "./age-calculator-app/age-calculator/age-calculator.component";
import { ParentChatBoxComponent } from "./simple-chat-application/parent-chat-box/parent-chat-box.component";
import { TaskListComponent } from "./To-do-list-App/task-list/task-list.component";
import { TrvParentComponent } from "./trv-child-to-parent/trv-parent/trv-parent.component";
import { ParentViewChildComponent } from "./view-child-child-to-parent/parent-view-child/parent-view-child.component";
import { ParentCounterComponent } from "./view-child-counter-app/parent-counter/parent-counter.component";
import { ParentTabTrvComponent } from "./dynamic-tab-structure-trv/parent-tab-trv/parent-tab-trv.component";
import { ViewChildRefComponent } from "./view-child-ref/view-child-ref.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular-learning';
}
