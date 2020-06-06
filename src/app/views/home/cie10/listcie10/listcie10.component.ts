import { Component, OnInit, ViewChild } from '@angular/core';
import { Cie10 } from 'src/app/models/cie10';
import { Cie10Service } from 'src/app/services/cie10.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Formcie10Component } from '../formcie10/formcie10.component';
import { Validatorscie10 } from 'src/app/validators/validatorscie10';

@Component({
  selector: 'app-listcie10',
  templateUrl: './listcie10.component.html',
  styleUrls: ['./listcie10.component.css']
})
export class Listcie10Component implements OnInit {
  arreglo;
  constructor(private cie10Service: Cie10Service,
              private dialog: MatDialog,
              private validatorscie10: Validatorscie10
  ) { }
  form = this.validatorscie10.form;
  listCie10: MatTableDataSource<any>;
  displayedColumns: string[] = ['codigo', 'descripcion', 'estado', 'actions'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;
  ngOnInit() {
    this.getCie10();
  }
  getCie10() {
    this.cie10Service.getCie10().snapshotChanges().subscribe(
      list => {
        this.arreglo = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listCie10 = new MatTableDataSource(this.arreglo);
        this.listCie10.sort = this.sort;
        this.listCie10.paginator = this.paginator;
      });
  }

  onSearchClear() {
    this.searchKey = '';
    this.searchFiltrer();
  }
  searchFiltrer() {
    this.listCie10.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate() {
    this.validatorscie10.initializeFomrGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(Formcie10Component, dialogConfig);
  }
  onEdit(row) {
    this.form.setValue(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(Formcie10Component, dialogConfig);
  }
  onDelete(row) {
    this.cie10Service.deleteCie10(row);
  }
}
