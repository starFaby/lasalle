import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormgeneralComponent } from './formgeneral/formgeneral.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ListestudianteComponent } from './estudiante/listestudiante/listestudiante.component';
import { Listcie10Component } from './cie10/listcie10/listcie10.component';
import { DatepdfComponent } from './datepdf/datepdf.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'formularioForm', component: FormgeneralComponent },
      { path: 'estudianteList', component: ListestudianteComponent },
      { path: 'cie10List', component: Listcie10Component },
      { path: 'datePdf', component: DatepdfComponent }
    ]
  },
  {
    path: '', component: EstudianteComponent
  }
  // { path: 'estudianteForm', component: EstudianteComponent }
  // {path: 'layout', component: LayoutComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
