import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTravellerComponent } from './components/add-traveller/add-traveller.component';
import { ApiComponent } from './components/api/api.component';
import { FlightsComponent } from './components/flights/flights.component';
import { PoliciesComponent } from './components/policies/policies.component';

const routes: Routes = [
{
  path:'', 
  component:AddTravellerComponent
},
{
  path:'flights',
  component:FlightsComponent
  
},
{
  path:'policies',
  component:PoliciesComponent
},
{
  path: 'api',
  component:ApiComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
