import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { General } from '../models/general';
import { Fecha } from '../validators/fecha';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  generalList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase,
              private fecha: Fecha) { }
  getGenerals() {
    return this.generalList = this.firebase.list('general');
  }
  saveGeneral(general: General) {
    console.log(general.descripcion);
    this.generalList.push({
      idEstudiante: general.idEstudiante,
      cedula: general.cedula,
      grupoSanguineo: general.grupoSanguineo,
      antecedentes: general.antecedentes,
      motivoConsulta: general.motivoConsulta,
      enfermedadActual: general.enfermedadActual,
      presion: general.presion,
      temperatura: general.temperatura,
      saturacionOxigeno: general.saturacionOxigeno,
      peso: general.peso,
      talla: general.talla,
      examenFisico: general.examenFisico,
      idCie10: general.idCie10,
      codigo: general.codigo,
      descripcion: general.descripcion,
      tratamiento: general.tratamiento,
      seguimiento: general.seguimiento,
      observaciones: general.observaciones,
      estado: general.estado,
      fechaCreacion : this.fecha.dateExat()
    });
  }
}
