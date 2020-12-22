import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanyComponent } from './company/company.component';
import { ZerodhaComponent } from './zerodha/zerodha.component';


const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path:'company', component:CompanyComponent, 
  children:[
    {path:'zerodha-review',component:ZerodhaComponent}
  ]},
  // {path:'company/:brokerId',component:CompanyComponent},
  { path:'brokerage-calculator',component:ProfileComponent},
  { path: '', redirectTo: '/brokerage-calculator', pathMatch: 'full'},
  { path: '**', component: HomeComponent }
  // { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
