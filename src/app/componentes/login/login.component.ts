import { Component, OnInit } from '@angular/core';
import {  Usuario } from '../../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario = new Usuario;
  constructor(private route: Router) {     
  }

  ngOnInit(): void {
  }

  public login(){
    if(this.usuario.nombre=="admin" && this.usuario.clave=="admin"){
      this.route.navigate(["bienvenido"]);
    }
    else{
      
      this.route.navigate(["error"]);
    }
  }

}
