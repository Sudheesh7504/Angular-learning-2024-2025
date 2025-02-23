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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TestService } from './routing/test.service';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './route-parameters/landing/landing.component';
import { UsersComponent } from './route-parameters/users/users.component';
import { UserDetailsComponent } from './route-parameters/user-details/user-details.component';
import { VehicleParkingHomeComponent } from './parking-management-app/vehicle-parking-home/vehicle-parking-home.component';
import { VehicleParkingDashboardComponent } from './parking-management-app/vehicle-parking-dashboard/vehicle-parking-dashboard.component';
import { VehicleParkingDetailsComponent } from './parking-management-app/vehicle-parking-details/vehicle-parking-details.component';
import { ProductsHomeComponent } from './query-params/products-home/products-home.component';
import { ProductsComponent } from './query-params/products/products.component';
import { ProductsHeaderComponent } from './query-params/products-header/products-header.component';
import { Homechild1Component } from './routing/homechild1/homechild1.component';
import { Homechild2Component } from './routing/homechild2/homechild2.component';
import { ProductDetailsComponent } from './query-params/product-details/product-details.component';
import { HttpModuleComponentComponent } from './http-module/http-module-component/http-module-component.component';
import { DetailsComponent } from './route-guards/details/details.component';
import { RouteGuardHeaderComponent } from './route-guards/route-guard-header/route-guard-header.component';
import { AuthGuard } from './route-guards/auth.guard';
import { AuthService } from './route-guards/auth.service';
import { ObservableComponent } from './observables/observable/observable.component';
import { CaptureComponent } from './content-projection/capture/capture.component';
import { ReviewComponent } from './content-projection/review/review.component';
import { NgcontainerComponent } from './ng-container/ngcontainer/ngcontainer.component';
import { NgtemplateComponent } from './ng-template/ngtemplate/ngtemplate.component';
import { SimpleFormControlComponent } from './template-driven-forms/simple-form-control/simple-form-control.component';
import { ReactiveFormsValidationsComponent } from './reactive-forms/reactive-forms-validations/reactive-forms-validations.component';
import { FormArrayComponent } from './reactive-forms/form-array/form-array.component';
import { FormBuilderComponent } from './reactive-forms/form-builder/form-builder.component';
import { SignupFormComponent } from './template-driven-forms/signup-form/signup-form.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { CustomDirectiveComponent } from './custom-directives/custom-directive/custom-directive.component';
import { CustomDirective } from './custom-directives/custom.directive';
import { CustomStructuralDirectiveComponent } from './custom-directives/custom-structural-directive/custom-structural-directive.component';
import { CustomNgIfDirective } from './custom-directives/custom-ng-if.directive';
import { ReactiveFormComponent } from './custom-getter-functions-for-reactive-forms/reactive-form/reactive-form.component';
import { TestModuleModule } from './modules/test-module/test-module.module';
import { AppModuleComp1Component } from './lazy-loading/app-module-comp1/app-module-comp1.component';
import { ChildOnChangesComponent } from './life-cycle-hooks/ng-on-changes/child-on-changes/child-on-changes.component';
import { ParentOnChangesComponent } from './life-cycle-hooks/ng-on-changes/parent-on-changes/parent-on-changes.component';
import { NgOnInitComponent } from './life-cycle-hooks/ng-on-init-vs-constructor/ng-on-init/ng-on-init.component';
import { ParentNgDoCheckComponent } from './life-cycle-hooks/ng-do-check/parent-ng-do-check/parent-ng-do-check.component';
import { ChildNgDoCheckComponent } from './life-cycle-hooks/ng-do-check/child-ng-do-check/child-ng-do-check.component';
import { NgAfterViewInitAndCheckedComponent } from './life-cycle-hooks/ng-after-view-init-Vs-ng-after-view-checked/ng-after-view-init-and-checked/ng-after-view-init-and-checked.component';
import { ParentNgAfterContentInitAndCheckedComponent } from './life-cycle-hooks/ng-after-content-init-and-content-checked/parent-ng-after-content-init-and-checked/parent-ng-after-content-init-and-checked.component';
import { ChildNgAfterContentInitAndCheckedComponent } from './life-cycle-hooks/ng-after-content-init-and-content-checked/child-ng-after-content-init-and-checked/child-ng-after-content-init-and-checked.component';
import { HomeNgOnDestroyComponent } from './life-cycle-hooks/ng-on-destroy/home-ng-on-destroy/home-ng-on-destroy.component';
import { SignupNgOnDestroyComponent } from './life-cycle-hooks/ng-on-destroy/signup-ng-on-destroy/signup-ng-on-destroy.component';
import { ContactNgOnDestroyComponent } from './life-cycle-hooks/ng-on-destroy/contact-ng-on-destroy/contact-ng-on-destroy.component';
import { NgOnDestroyComponent } from './life-cycle-hooks/ng-on-destroy/ng-on-destroy/ng-on-destroy.component';
import { SubjectFormComponent } from './subjects/subject/subject/subject-form/subject-form.component';
import { SubjectToDoListComponent } from './subjects/subject/subject/subject-to-do-list/subject-to-do-list.component';
import { SubjectComponent } from './subjects/subject/subject/subject/subject.component';
import { HomeBehaviorSubjectComponent } from './subjects/behavior-subject/home-behavior-subject/home-behavior-subject.component';
import { ProductsBehaviorSubjectComponent } from './subjects/behavior-subject/products-behavior-subject/products-behavior-subject.component';
import { BehaviorSubjectPasswordCheckerComponent } from './subjects/behavior-subject/behavior-subject-password-checker-app/behavior-subject-password-checker/behavior-subject-password-checker.component';
import { BehaviorSubjectCounterDisplayComponent } from './subjects/behavior-subject/behavior-subject-counter-app/behavior-subject-counter-display/behavior-subject-counter-display.component';
import { BehaviorSubjectIncrementCounterComponent } from './subjects/behavior-subject/behavior-subject-counter-app/behavior-subject-increment-counter/behavior-subject-increment-counter.component';
import { BehaviorSubjectDecrementCounterComponent } from './subjects/behavior-subject/behavior-subject-counter-app/behavior-subject-decrement-counter/behavior-subject-decrement-counter.component';
import { StockUpdatesReplaySubjectComponent } from './subjects/replay-subject/stock-updates-app/stock-updates-replay-subject/stock-updates-replay-subject.component';
import { User1Component } from './subjects/replay-subject/chat-application-replay-subject/user1/user1.component';
import { User2Component } from './subjects/replay-subject/chat-application-replay-subject/user2/user2.component';
import { StudentResultDisplayComponent } from './subjects/async-subject/result-generator-app/student-result-display/student-result-display.component';
import { RxjsCreationOperatorsComponent } from './subjects/rxjs-operators/creation-operators/rxjs-creation-operators/rxjs-creation-operators.component';
import { MapOperatorComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/map-operator/map-operator.component';
import { FilterOperatorComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/filter-operator/filter-operator.component';
import { FromEventOperatorComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/from-event-operator/from-event-operator.component';
import { SearchDataComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/search-functionality-app/search-data/search-data.component';
import { MergeOperatorComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/merge-operator/merge-operator/merge-operator.component';
import { PluckOperatorComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/pluck-operator/pluck-operator.component';
import { SkipOperatorComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/skip-operator/skip-operator.component';
import { DistinctUntilChangedOperatorComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/distinct-until-changed-operator/distinct-until-changed-operator.component';
import { ExtractingUsersDataComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/merge-operator/extracting-data-task/extracting-users-data/extracting-users-data.component';
import { TrackButtonClicksComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/merge-operator/button-click-handling/track-button-clicks/track-button-clicks.component';
import { RealtimeNotificationsComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/merge-operator/realtime-notofications-app/realtime-notifications/realtime-notifications.component';
import { ForkJoinOperatorComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/fork-join-operator/fork-join-operator/fork-join-operator.component';
import { ContactMapOperatorComponent } from './subjects/rxjs-operators/rxjs-pipeable-operators/concat-map-operator/contact-map-operator/contact-map-operator.component';
import { ExhaustMapOperatorComponent } from './subjects/rxjs-operators/exhaust-map-operator/exhaust-map-operator/exhaust-map-operator.component';
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
    HomeComponent,
    LandingComponent,
    UsersComponent,
    UserDetailsComponent,
    VehicleParkingHomeComponent,
    VehicleParkingDashboardComponent,
    VehicleParkingDetailsComponent,
    ProductsHomeComponent,
    ProductsComponent,
    ProductsHeaderComponent,
    Homechild1Component,
    Homechild2Component,
    ProductDetailsComponent,
    HttpModuleComponentComponent,
    DetailsComponent,
    RouteGuardHeaderComponent,
    ObservableComponent,
    CaptureComponent,
    ReviewComponent,
    NgcontainerComponent,
    NgtemplateComponent,
    SimpleFormControlComponent,
    ReactiveFormsValidationsComponent,
    FormArrayComponent,
    FormBuilderComponent,
    SignupFormComponent,
    AsyncPipeComponent,
    CustomDirectiveComponent,
    CustomDirective,
    CustomStructuralDirectiveComponent,
    CustomNgIfDirective,
    ReactiveFormComponent,
    AppModuleComp1Component,
    ChildOnChangesComponent,
    ParentOnChangesComponent,
    NgOnInitComponent,
    ParentNgDoCheckComponent,
    ChildNgDoCheckComponent,
    NgAfterViewInitAndCheckedComponent,
    ParentNgAfterContentInitAndCheckedComponent,
    ChildNgAfterContentInitAndCheckedComponent,
    HomeNgOnDestroyComponent,
    SignupNgOnDestroyComponent,
    ContactNgOnDestroyComponent,
    NgOnDestroyComponent,
    SubjectFormComponent,
    SubjectToDoListComponent,
    SubjectComponent,
    HomeBehaviorSubjectComponent,
    ProductsBehaviorSubjectComponent,
    BehaviorSubjectPasswordCheckerComponent,
    BehaviorSubjectCounterDisplayComponent,
    BehaviorSubjectIncrementCounterComponent,
    BehaviorSubjectDecrementCounterComponent,
    StockUpdatesReplaySubjectComponent,
    User1Component,
    User2Component,
    StudentResultDisplayComponent,
    RxjsCreationOperatorsComponent,
    MapOperatorComponent,
    FilterOperatorComponent,
    FromEventOperatorComponent,
    SearchDataComponent,
    MergeOperatorComponent,
    PluckOperatorComponent,
    SkipOperatorComponent,
    DistinctUntilChangedOperatorComponent,
    ExtractingUsersDataComponent,
    TrackButtonClicksComponent,
    RealtimeNotificationsComponent,
    ForkJoinOperatorComponent,
    ContactMapOperatorComponent,
    ExhaustMapOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TestModuleModule
  ],
  providers: [TestService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
