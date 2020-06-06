import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Cie10Service } from 'src/app/services/cie10.service';
import { Cie10 } from 'src/app/models/cie10';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { Cie10Component } from '../cie10.component';
import { Validatorscie10 } from 'src/app/validators/validatorscie10';

@Component({
  selector: 'app-formcie10',
  templateUrl: './formcie10.component.html',
  styleUrls: ['./formcie10.component.css']
})
export class Formcie10Component implements OnInit {

  constructor(private cie10Service: Cie10Service, private matDialogRef: MatDialogRef<Cie10Component>,
              private dialog: MatDialog,
              private validatorscie10: Validatorscie10) { }

  form = this.validatorscie10.form;

  ngOnInit() {
  }
  onReset() {
    this.validatorscie10.form.reset();
    this.validatorscie10.initializeFomrGroup();
  }
  onSubmit() {
    if (this.validatorscie10.form.valid) {
      if (this.validatorscie10.form.get('$key').value == null) {
        this.cie10Service.saveCie10(this.validatorscie10.form.value);
        this.validatorscie10.form.reset();
        this.validatorscie10.initializeFomrGroup();
        this.onClose();
      } else {
        this.cie10Service.updateCie10(this.validatorscie10.form.value);
        this.validatorscie10.form.reset();
        this.validatorscie10.initializeFomrGroup();
        this.onClose();
      }
    }
  }
  onClose() {
    this.validatorscie10.form.reset();
    this.validatorscie10.initializeFomrGroup();
    this.matDialogRef.close();
  }
  onEdit(row) {
    this.validatorscie10.form.setValue(row);
    const matDialogRef = new MatDialogConfig();
    matDialogRef.disableClose = true;
    matDialogRef.autoFocus = true;
    matDialogRef.width = '10px';
    this.dialog.open(Formcie10Component, matDialogRef); 
  }


}
