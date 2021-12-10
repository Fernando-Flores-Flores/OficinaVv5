import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-empleador',
  templateUrl: './navbar-empleador.component.html',
  styleUrls: ['./navbar-empleador.component.css']
  
})
export class NavbarEmpleadorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irFREmpleador(){
    this.router.navigate(['formsRegistroEmpleador']);
   
     }
    
}
