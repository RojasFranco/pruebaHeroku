import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './componentes/nuevo-componente/nuevo-componente.component';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
import { DetalleEntidadComponent } from './componentes/detalle-entidad/detalle-entidad.component';
import { BotonEntidadComponent } from './componentes/boton-entidad/boton-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    ListadoEntidadComponent,
    ControlEntidadComponent,
    DetalleEntidadComponent,
    BotonEntidadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,    
    HttpClientModule    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
