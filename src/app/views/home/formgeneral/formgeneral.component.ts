import { Component, OnInit, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Cie10 } from 'src/app/models/cie10';
import { Cie10Service } from 'src/app/services/cie10.service';
import { General } from 'src/app/models/general';
import { GeneralService } from 'src/app/services/general.service';
import { Validatorsgeneral } from 'src/app/validators/validatorsgeneral';
import { EstudianteComponent } from '../estudiante/estudiante.component';

@Component({
  selector: 'app-formgeneral',
  templateUrl: './formgeneral.component.html',
  styleUrls: ['./formgeneral.component.css']
})
export class FormgeneralComponent implements AfterViewInit, OnInit {

  private contador = 0;
  private encontrado = false;
  arregloEstudiante: Estudiante[];
  arregloCie10: Cie10[];
  @ViewChild('onOffButton', { static: false }) onOffButton1: ElementRef;
  @ViewChild('onOffButtonCie10', { static: false }) onOffButtonCie101: ElementRef;
  cedulaBuscar: any = {
    cedula: ''
  };
  person: any = {
    idEstudiante: '',
    nombre: '',
    apellido: '',
    direccion: '',
    genero: '',
    fechaN: '',
    fechaNaciExtacta: '',
    estado: ''
  };
  /***************************************************/
  /***************************************************/
  cie10Buscar: any = {
    codigo: ''
  };
  cie10: any = {
    idCie10: '',
    descripcion: ''
  };
  /***************************************************/
  /***************************************************/

  constructor(private estudianteService: EstudianteService,
    private cie10Service: Cie10Service,
    private generalService: GeneralService,
    private validatorsgeneral: Validatorsgeneral,
    private renderer: Renderer2) { }
  form = this.validatorsgeneral.form;
  ngOnInit() {
    this.getEstudiantes();
    this.getCie10();
    this.getGeneral();
    // this.form.get('descripcion').disable();
  }
  ngAfterViewInit() {
    this.offButton();
    this.offButtonCie10();
  }

  // DOM
  offButton() {
    this.renderer.setAttribute(this.onOffButton1.nativeElement, 'disabled', 'true');
  }
  onButton() {
    this.renderer.removeAttribute(this.onOffButton1.nativeElement, 'disabled');
  }
  offButtonCie10() {
    this.renderer.setAttribute(this.onOffButtonCie101.nativeElement, 'disabled', 'true');
  }
  onButtonCie10() {
    this.renderer.removeAttribute(this.onOffButtonCie101.nativeElement, 'disabled');
  }

  // service
  getGeneral() {
    this.generalService.getGenerals();
  }
  onKey(event) {
    this.contador = event.target.value.length;
    if (this.contador !== 10) {
      console.log('Cedula Invalida');
      this.onButton();
    } else {
      console.log('Cedula valida');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.arregloEstudiante.length; i++) {
        if (this.arregloEstudiante[i].cedula === this.cedulaBuscar.cedula) {
          this.encontrado = true;
          this.person.idEstudiante = this.arregloEstudiante[i].$key;
          this.person.nombre = this.arregloEstudiante[i].nombre;
          this.person.apellido = this.arregloEstudiante[i].apellido;
          this.person.direccion = this.arregloEstudiante[i].direccion;
          this.person.genero = this.arregloEstudiante[i].genero;
          if (this.person.genero === 'F') {
            this.person.genero = 'Mujer';
          } else if (this.person.genero === 'M') {
            this.person.genero = 'Hombre';
          }
          this.person.fechaN = this.arregloEstudiante[i].fechaN;
          this.person.fechaNaciExtacta = this.fechaNacimientoExtacto(this.arregloEstudiante[i].fechaN);
          this.person.estado = this.arregloEstudiante[i].estado;
          if (this.person.estado === '0') {
            this.person.estado = 'Inactivo';
          } else if (this.person.estado === '1') {
            this.person.estado = 'Activo';
          }
          console.log(this.arregloEstudiante[i].cedula);
          this.offButton();
          break;
        }
        if (this.arregloEstudiante[i].cedula !== this.cedulaBuscar.cedula) {
          this.encontrado = false;
          continue;
        }
      }
      if (this.encontrado === true) {
        console.log('encontrado');
      }
      if (this.encontrado === false) {
        console.log('Estudiante no Registrado');
      }
    }

  }


  getEstudiantes() {
    this.estudianteService.getEstudiantes().snapshotChanges().subscribe(
      list => {
        this.arregloEstudiante = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onKey1(event) {
    this.contador = event.target.value.length;
    if (this.contador !== 3) {
      console.log('codigo Invalido');
      this.offButtonCie10();
    } else {
      console.log('CodigoEncontrado');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.arregloCie10.length; i++) {
        if (this.arregloCie10[i].codigo === this.cie10Buscar.cie10) {
          this.encontrado = true;
          this.cie10.idCie10 = this.arregloCie10[i].$key;
          this.cie10.codigo = this.arregloCie10[i].codigo;
          this.cie10.descripcion = this.arregloCie10[i].descripcion;
          this.onButtonCie10();
          break;
        }
      }
    }
    if (this.encontrado === true) {
      console.log('encontrado');
      this.offButtonCie10();
    }
    if (this.encontrado === false) {
      console.log('Cie NO Registrado');
      this.onButtonCie10();
    }
  }


  getCie10() {
    this.cie10Service.getCie10().snapshotChanges().subscribe(
      list => {
        this.arregloCie10 = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }
  /******************Guardar formulario General********************** */
  /***************************************************************** */
  onSubmit() {
    if (this.validatorsgeneral.form.valid) {
      console.log(this.validatorsgeneral.form.value);
      if (this.validatorsgeneral.form.get('$key').value == null) {
        this.generalService.saveGeneral(this.validatorsgeneral.form.value);
        this.validatorsgeneral.form.reset();
        this.validatorsgeneral.initializeFomrGroup();
        this.close();
      }
    }
  }
  close() {
    this.validatorsgeneral.form.reset();
    this.validatorsgeneral.initializeFomrGroup();
  }
  resetForm(formGeneral?: NgForm) {
    if (formGeneral != null) {
      formGeneral.reset();
    }
  }
  fechaNacimientoExtacto(birthdate) {
    const fechaNacimiento = new Date(birthdate);
    const mmNacimiento = fechaNacimiento.getMonth() + 1;
    const ddNacimiento = fechaNacimiento.getDate();
    const yyyyNacimiento = fechaNacimiento.getFullYear();
    const fechaActual = new Date();
    const mm = fechaActual.getMonth() + 1;
    const dd = fechaActual.getDate();
    const yyyy = fechaActual.getFullYear();
    const haveMonth = Math.abs(mm - mmNacimiento);
    const haveDate = Math.abs(dd - ddNacimiento);
    const haveYear = Math.abs(yyyy - yyyyNacimiento);
    const showFecha = `Tienes ${haveYear} años, ${haveMonth} meses y ${haveDate} dias`;
    console.log(showFecha);
    return showFecha;
  }
}
