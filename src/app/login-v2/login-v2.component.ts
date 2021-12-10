import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from '../cargar-scripts.service';
@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.css']
})
export class LoginV2Component implements OnInit {

  constructor(private router: Router){

  }
  ngOnInit(): void {
  }
  irAsegurado(){
    this.router.navigate(['asegurado']);

  }
}
