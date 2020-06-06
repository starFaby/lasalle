import { Component, OnInit, ViewChild } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { FormestudianteComponent } from '../formestudiante/formestudiante.component';
import { Validatorsestudiante } from 'src/app/validators/validatorsestudiante';


@Component({
  selector: 'app-listestudiante',
  templateUrl: './listestudiante.component.html',
  styleUrls: ['./listestudiante.component.css']
})
export class ListestudianteComponent implements OnInit {
  arreglo;
  constructor(private estudianteService: EstudianteService,
              private dialog: MatDialog,
              private validatorsestudiante: Validatorsestudiante
  ) { }
  form = this.validatorsestudiante.form;
  listEstudiante: MatTableDataSource<any>;
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'direccion', 'genero', 'fechaN', 'estado', 'actions'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;
  ngOnInit() {
    this.getEstudiantes();
  }
  getEstudiantes() {
    this.estudianteService.getEstudiantes().snapshotChanges().subscribe(
      list => {
        this.arreglo = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        console.log(this.arreglo);
        this.listEstudiante = new MatTableDataSource(this.arreglo.toLowerCase());
        this.listEstudiante.sort = this.sort;
        this.listEstudiante.paginator = this.paginator;
      });
  }
  onSearchClear() {
    this.searchKey = '';
    this.searchFiltrer();
  }
  searchFiltrer() {
    this.listEstudiante.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate() {
    this.validatorsestudiante.initializeFomrGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(FormestudianteComponent, dialogConfig);
  }
  onEdit(row) {
    this.validatorsestudiante.initializeFomrGroup();
    this.form.setValue(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(FormestudianteComponent, dialogConfig);
  }
  onDelete(row) {
    this.estudianteService.deleteAlumno(row);
  }

}
