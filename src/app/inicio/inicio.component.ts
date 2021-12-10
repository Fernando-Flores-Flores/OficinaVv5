import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  irAsegurado(){
    this.router.navigate(['login']);
  }
  irEmpleador(){
    this.router.navigate(['empleador']);
  }
  irLoginv2(){
    this.router.navigate(['loginV2']);
  }
  irPrueba(){
    this.router.navigate(['pruebasFormualarios']);
  }
  irDerecho(){
    this.router.navigate(['f-registro-empleador']);
  }
}
