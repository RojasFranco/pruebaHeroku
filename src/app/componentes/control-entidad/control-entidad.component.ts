import { Component, OnInit } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  public listadoEnviar: any;
  public listadoDeEliminados: Array<any> = [];
  public itemEnviar: any;
  constructor(private servicioListado: MiServicioService) { }

  ngOnInit(): void {
    this.servicioListado.ObtenerListado().subscribe( rta =>{
      this.listadoEnviar = rta;      
    });
  }  

  seleccionarItem(dato){
    this.itemEnviar = dato;
  }

  eliminar(itemEliminar){       
    for (let index = 0; index < this.listadoEnviar.length; index++) {
      const element = this.listadoEnviar[index];
      if(element.id==itemEliminar.id){
        this.listadoEnviar.splice(index, 1);
        this.listadoDeEliminados.push(itemEliminar);
        break;
      }      
    }    
    this.itemEnviar=null;
  }

}
