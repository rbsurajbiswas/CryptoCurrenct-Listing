import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ViewComponent } from './Components/view/view.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'view', component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
