import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './views/start/start.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: '**', redirectTo: 'not-found' },
  { path: 'home', loadChildren: './views/home/home.module#HomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
