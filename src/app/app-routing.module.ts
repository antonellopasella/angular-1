import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeterComponent } from './meter/meter.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'meter/:id', component: MeterComponent },
//   { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
