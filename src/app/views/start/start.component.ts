import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  isFirstTabVisible;
  isSecondTabVisible;
  isThirdTabVisible;
  activeTab = 1;
  index;
  array = [
    {id: 1, numeroFactura: 25, valor: 55, estado: 1},
    {id: 2, numeroFactura: 50, valor: 56, estado: 0},
    {id: 3, numeroFactura: 75, valor: 57, estado: 1},
    {id: 4, numeroFactura: 25, valor: 58, estado: 0}
  ]
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  onTabPanelClick(event, tab) {
    this.isFirstTabVisible= (event.index === 0) ? true : false;
    this.isSecondTabVisible= (event.index === 1) ? true : false;
    this.isThirdTabVisible= (event.index === 2) ? true : false;
 }
 tabChanged(event) {
  console.log(event);
 }
 capturar(event){
  console.log(event.target.value);
 }

}
