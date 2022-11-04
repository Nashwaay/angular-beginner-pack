import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { WishListComponent } from './modules/wish-list/wish-list.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'wish-list', component: WishListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
