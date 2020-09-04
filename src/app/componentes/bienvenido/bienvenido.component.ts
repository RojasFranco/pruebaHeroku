import { Component, OnInit } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  public paises: any;
  constructor(public service: MiServicioService) { }

  ngOnInit(): void {
  }

  public CargarPaises(){
    this.service.ObtenerPaises().subscribe( (datos)=> {
      this.paises = datos;
      
    })
  }
}
