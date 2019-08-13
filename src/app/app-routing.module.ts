import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { AddReactiveComponent } from './add-reactive/add-reactive.component';
import { UpdateComponent } from './update/update.component';
import { ShowsearchedComponent } from './showsearched/showsearched.component';


const routes: Routes = [
  {path: '', redirectTo: 'add', pathMatch: 'full'},
  { path: 'list', component: CustomerlistComponent},
  { path: 'add', component: AddcustomerComponent},
  { path: 'search', component: SearchcustomerComponent},
  { path: 'addreactive', component: AddReactiveComponent},
  { path: 'showsearch', component: ShowsearchedComponent},
  { path: 'update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
