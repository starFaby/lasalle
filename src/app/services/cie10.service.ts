import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Cie10 } from '../models/cie10';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class Cie10Service {
  row: any;
  cie10List: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }
  getCie10() {
    return this.cie10List = this.firebase.list('cie10');
  }
  saveCie10(cie10: Cie10) {
    this.cie10List.push({
      codigo: cie10.codigo,
      descripcion: cie10.descripcion,
      estado: cie10.estado
    });
  }
  updateCie10(cie10: Cie10) {
    this.cie10List.update(cie10.$key, {
      codigo: cie10.codigo,
      descripcion: cie10.descripcion,
      estado: cie10.estado
    });
  }
  deleteCie10($key: string) {
    this.cie10List.remove($key);
  }
}
