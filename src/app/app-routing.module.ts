import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NoHomeComponent } from './Components/no-home/no-home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo:'/Home' , pathMatch:'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'IHaveNoHome', component: NoHomeComponent},
  { path: '**', redirectTo:'/NotFound' , pathMatch:'full'},
  { path: 'NotFound', component: NotFoundComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
