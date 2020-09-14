import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() itemSeleccionado: any;
  @Output() eventEliminar: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(event){
    // console.log(event); ACA LLEGO
    this.eventEliminar.emit(event);
  }
}
