import { Component, OnInit } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  public listadoEnviar: any;
  constructor(private servicioListado: MiServicioService) { }

  ngOnInit(): void {
    this.servicioListado.ObtenerListado().subscribe( rta =>{
      this.listadoEnviar = rta;      
    });
  }  

}
