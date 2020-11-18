import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTravellerComponent } from './components/add-traveller/add-traveller.component';
import { FlightsComponent } from './components/flights/flights.component';
import { PoliciesComponent } from './components/policies/policies.component';

const routes: Routes = [
{
  path:'', 
  component:FlightsComponent
},
{
  path:'addTravellers',
  component:AddTravellerComponent
},
{
  path:'policies',
  component:PoliciesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
