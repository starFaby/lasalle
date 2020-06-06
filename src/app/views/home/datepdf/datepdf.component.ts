import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';
import { GeneralService } from 'src/app/services/general.service';
import { General } from 'src/app/models/general';
import { MatTableDataSource } from '@angular/material';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Fecha } from 'src/app/validators/fecha';
// import 'jspdf-autotable';

@Component({
  selector: 'app-datepdf',
  templateUrl: './datepdf.component.html',
  styleUrls: ['./datepdf.component.css']
})
export class DatepdfComponent implements OnInit {
  urlSafe: SafeResourceUrl;
  doc = new jsPDF();
  first;
  arreglo;
  getfechas: any = {
    fechaInicio: '',
    fechaFin: ''
  };
  rows = [];

  constructor(private generalService: GeneralService,
              private fecha: Fecha
    ) { }
  ngOnInit() {
    this.getGeneral();
    this.showPdf();
  }
  getGeneral() {
    this.generalService.getGenerals().snapshotChanges().subscribe(
      list => {
        this.arreglo = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }
  getFechaInicioFinal() {
    if (this.getfechas.fechaInicio !== '') {
      if (this.getfechas.fechaFin !== '') {
        const fechaI = this.fecha.dateExatParam(this.getfechas.fechaInicio);
        console.log('fecha inicio ', fechaI);
        const fechaF = this.fecha.dateExatParam(this.getfechas.fechaFin);
        console.log('fecha fin ', fechaF);
        const encontrados = this.arreglo.filter(f => f.fechaCreacion >= fechaI && f.fechaCreacion <= fechaF);
        console.log('acertaste ', encontrados);
        this.onDatosObtenidos(encontrados);
      } else {
        console.log('fecha final esta vacia');
      }
    } else {
      console.log('fecha inicio esta vacia');
    }
  }
  onDatosObtenidos(arreglo) {
    console.log('obteniendo datos');
    console.log(arreglo);
    this.rows.push(arreglo[0].fechaCreacion);
    this.showPdf();
  }
  showPdf() {
    this.doc.text('Reporte Mensual', 75, 10);
    this.doc.text('Reporte Mensual', 14, 30);
    this.doc.text('Reporte Mensual', 14, 50);
    // const cuerpo = [];
    const col = ['fecha', 'cedula', 'descripcion'];
    
    /* this.arreglo.forEach(element => {
       const temp = [element.fechaCreacion, element.cedula, element.descripcion];
       cuerpo.push(temp);
     });*/
    this.doc.autoTable(col, this.rows, {
      startY: 100,
      styles: {
        cellPadding: 2,
        fontSize: 7,
        valign: 'middle',
        overflow: 'linebreak',
        tableWidth: 'auto',
        lineWidth: 0
      }
    });
    this.first = this.doc.autoTable.previous;
    this.urlSafe = this.doc.output('datauristring');
  }
  printPdf() {
    this.doc.save('reporte mensual');
  }

}
