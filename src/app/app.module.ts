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
import { AgeCalculatorComponent } from './age-calculator-app/age-calculator/age-calculator.component';
import { AgeDisplayComponent } from './age-calculator-app/age-display/age-display.component';
import { ParentChatBoxComponent } from './simple-chat-application/parent-chat-box/parent-chat-box.component';
import { ChildChatBoxComponent } from './simple-chat-application/child-chat-box/child-chat-box.component';
import { TaskListComponent } from './To-do-list-App/task-list/task-list.component';
import { ToDoListComponent } from './To-do-list-App/to-do-list/to-do-list.component';
import { TrvChildComponent } from './trv-child-to-parent/trv-child/trv-child.component';
import { TrvParentComponent } from './trv-child-to-parent/trv-parent/trv-parent.component';
import { ChildViewChildComponent } from './view-child-child-to-parent/child-view-child/child-view-child.component';
import { ParentViewChildComponent } from './view-child-child-to-parent/parent-view-child/parent-view-child.component';
import { ParentCounterComponent } from './view-child-counter-app/parent-counter/parent-counter.component';
import { ChildCounterComponent } from './view-child-counter-app/child-counter/child-counter.component';
import { ParentTabTrvComponent } from './dynamic-tab-structure-trv/parent-tab-trv/parent-tab-trv.component';
import { ChildTabTrvComponent } from './dynamic-tab-structure-trv/child-tab-trv/child-tab-trv.component';
import { ViewChildRefComponent } from './view-child-ref/view-child-ref.component';
import { ViewChildVsViewChildrenComponent } from './view-child-vs-view-children/view-child-vs-view-children.component';
import { HeaderComponent } from './routing/header/header.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { HomeComponent } from './routing/home/home.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';

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
    DynamicTabComponent,
    AgeCalculatorComponent,
    AgeDisplayComponent,
    ParentChatBoxComponent,
    ChildChatBoxComponent,
    TaskListComponent,
    ToDoListComponent,
    TrvChildComponent,
    TrvParentComponent,
    ChildViewChildComponent,
    ParentViewChildComponent,
    ParentCounterComponent,
    ChildCounterComponent,
    ParentTabTrvComponent,
    ChildTabTrvComponent,
    ViewChildRefComponent,
    ViewChildVsViewChildrenComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
