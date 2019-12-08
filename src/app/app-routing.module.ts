import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { PaginationDemoComponent } from './pagination-demo/pagination-demo.component';


const routes: Routes = [
  //{path:'about', component:AboutComponent},
  {path:'', pathMatch :'full',  component:AppComponent},
  {path:'listing', component:PaginationDemoComponent},
  {path:'about/:id', component:AboutComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
