import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primer-proyecto';
  public edadUno: string;
  public edadDos: string;
  public promedio: number;
  public suma: number;

  public realizarCalculos(){        
    this.suma = parseInt(this.edadUno) + parseInt(this.edadDos);
    this.promedio = (this.suma)/2;
  }

  public limpiarCuadros(){
    this.edadUno = null;
    this.edadDos = null;
    this.suma = null;
    this.promedio = null;
  }
}
