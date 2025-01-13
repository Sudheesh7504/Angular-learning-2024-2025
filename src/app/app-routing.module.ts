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

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: '**', component: NotFoundComponent }
// ];
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

const routes: Routes = [
  { path: '', component: ProductsHomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
