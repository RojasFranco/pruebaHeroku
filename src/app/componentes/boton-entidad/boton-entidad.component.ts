import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css']
})
export class BotonEntidadComponent implements OnInit {

  @Input() itemBorrar: any;
  @Output() eventoEliminarItem: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {    
  }

  BorrarItem(){
    this.eventoEliminarItem.emit(this.itemBorrar);
  }

}
