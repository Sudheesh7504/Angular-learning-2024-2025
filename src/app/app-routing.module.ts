import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { HomeComponent } from './routing/home/home.component';
import { LandingComponent } from './route-parameters/landing/landing.component';
import { UsersComponent } from './route-parameters/users/users.component';
import { UserDetailsComponent } from './route-parameters/user-details/user-details.component';
import { VehicleParkingHomeComponent } from './parking-management-app/vehicle-parking-home/vehicle-parking-home.component';
import { VehicleParkingDashboardComponent } from './parking-management-app/vehicle-parking-dashboard/vehicle-parking-dashboard.component';
import { VehicleParkingDetailsComponent } from './parking-management-app/vehicle-parking-details/vehicle-parking-details.component';
import { ProductsHomeComponent } from './query-params/products-home/products-home.component';
import { ProductsComponent } from './query-params/products/products.component';
import { Homechild1Component } from './routing/homechild1/homechild1.component';
import { Homechild2Component } from './routing/homechild2/homechild2.component';
import { ProductDetailsComponent } from './query-params/product-details/product-details.component';
import { LoginComponent } from './route-guards/login/login.component';
import { DetailsComponent } from './route-guards/details/details.component';
import { AuthGuard } from './route-guards/auth.guard';
import { AppModuleComp1Component } from './lazy-loading/app-module-comp1/app-module-comp1.component';
import { HomeNgOnDestroyComponent } from './life-cycle-hooks/ng-on-destroy/home-ng-on-destroy/home-ng-on-destroy.component';
import { SignupNgOnDestroyComponent } from './life-cycle-hooks/ng-on-destroy/signup-ng-on-destroy/signup-ng-on-destroy.component';
import { ContactNgOnDestroyComponent } from './life-cycle-hooks/ng-on-destroy/contact-ng-on-destroy/contact-ng-on-destroy.component';
import { HomeBehaviorSubjectComponent } from './subjects/behavior-subject/home-behavior-subject/home-behavior-subject.component';
import { ProductsBehaviorSubjectComponent } from './subjects/behavior-subject/products-behavior-subject/products-behavior-subject.component';

//routing with child routes
// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   {
//     path: 'home', component: HomeComponent,
//     children: [ //child routing : here we can load the different components inside some parent component 
//       { path: 'homechild1', component: Homechild1Component },
//       { path: 'homechild2', component: Homechild2Component }
//     ]
//   },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: '**', component: NotFoundComponent }
// ];

//route params
// const routes: Routes = [
//   { path: '', component: LandingComponent },
//   { path: 'users', component: UsersComponent },
//   { path: 'user/:id', component: UserDetailsComponent },
//   { path: '**', component: NotFoundComponent }
// ];

// const routes: Routes = [
//   { path: '', component: VehicleParkingHomeComponent },
//   { path: 'vehiclesDashboard', component: VehicleParkingDashboardComponent },
//   { path: 'vehicle/:id', component: VehicleParkingDetailsComponent }
// ]

//query params and child routes
// const routes: Routes = [
//   { path: '', component: ProductsHomeComponent },
//   { path: 'home/:id/:test', component: ProductsHomeComponent },
//   {
//     path: 'products', component: ProductsComponent,
//     children: [{
//       path: 'details/:id', component: ProductDetailsComponent
//     }]
//   },
//   { path: '**', component: NotFoundComponent }
// ];

//route-guards
// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'details', component: DetailsComponent, canActivate: [AuthGuard] }
// ]

//lazy-loading
// const routes: Routes = [
//   { path: '', component: AppModuleComp1Component },
//   {
//     path: 'lazym1c1',
//     loadChildren: () =>
//       import('./lazy-loading/lazym1/lazym1.module').then((m) => m.Lazym1Module)
//   }
// ]

//ng-on-destroy
// const routes: Routes = [
//   { path: 'home', component: HomeNgOnDestroyComponent },
//   { path: 'signup', component: SignupNgOnDestroyComponent },
//   { path: 'contact', component: ContactNgOnDestroyComponent }
// ]

//behavior-subject
const routes: Routes = [
  { path: "", component: HomeBehaviorSubjectComponent },
  { path: 'products', component: ProductsBehaviorSubjectComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
