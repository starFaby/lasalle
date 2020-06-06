import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatepdfComponent } from './datepdf/datepdf.component';
import { FormgeneralComponent } from './formgeneral/formgeneral.component';
import { MaterialModule } from 'src/app/imports/material.module';
import { MatIconModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

// firebase
import { AngularFireModule } from 'angularfire2';
import {  AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../environments/environment';

// imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ListestudianteComponent } from './estudiante/listestudiante/listestudiante.component';
import { FormestudianteComponent } from './estudiante/formestudiante/formestudiante.component';

// services
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Cie10Component } from './cie10/cie10.component';
import { Listcie10Component } from './cie10/listcie10/listcie10.component';
import { Formcie10Component } from './cie10/formcie10/formcie10.component';
import { Cie10Service } from 'src/app/services/cie10.service';
import { GeneralService } from 'src/app/services/general.service';
import { LayoutComponent } from './layout/layout.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';




@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    DatepdfComponent,
    FormgeneralComponent,
    EstudianteComponent,
    ListestudianteComponent,
    FormestudianteComponent,
    Cie10Component,
    Listcie10Component,
    Formcie10Component,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    HomeRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  providers: [
    EstudianteService,
    Cie10Service,
    GeneralService,
    MatDatepickerModule
  ],
  entryComponents: [
    Formcie10Component,
    FormestudianteComponent
  ]
})
export class HomeModule { }
