import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Estudiante } from '../models/estudiante';
import { Fecha } from '../validators/fecha';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  estudiantesList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase,
              private fecha: Fecha) { }

  getEstudiantes() {
    return this.estudiantesList = this.firebase.list('alumnos');
  }
  saveEstudiante(estudiante: Estudiante) {
    /*const fecha = new Date(estudiante.fechaN);
    const mm = fecha.getMonth() + 1;
    const dd = fecha.getDate();
    const yyyy = fecha.getFullYear();
    const fechaFinal = `${mm}/${dd}/${yyyy}`;*/
    // console.log(fechaFinal);
    this.estudiantesList.push({
      cedula: estudiante.cedula,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      direccion: estudiante.direccion,
      genero: estudiante.genero,
      fechaN: this.fecha.dateExatParam(estudiante.fechaN),
      estado: estudiante.estado
    });
  }
  updateAlumno(estudiante: Estudiante) {
    this.estudiantesList.update(estudiante.$key, {
      cedula: estudiante.cedula,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      direccion: estudiante.direccion,
      genero: estudiante.genero,
      fechaN: this.fecha.dateExatParam(estudiante.fechaN),
      estado: estudiante.estado
    });
  }
  deleteAlumno($key: string){
    this.estudiantesList.remove($key);
  }
}
