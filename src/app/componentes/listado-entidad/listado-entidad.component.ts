import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listadoRecibido: any;
  @Output() eventoItemSeleccionado: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.listadoRecibido);
  }

  seleccionar(itemElegido){
    this.eventoItemSeleccionado.emit(itemElegido);
  }

}
