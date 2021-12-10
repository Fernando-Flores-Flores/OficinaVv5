import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-registro-empleador',
  templateUrl: './forms-registro-empleador.component.html',
  styleUrls: ['./forms-registro-empleador.component.css']
})
export class FormsRegistroEmpleadorComponent implements OnInit {

 sig:string="Siguiente";
ant:string= "Anterior";

@ViewChild('paso1') paso1:ElementRef;
@ViewChild('paso2') paso2:ElementRef;


 constructor(private router: Router, private renderer2: Renderer2) { }

  ngOnInit(): void {
  } 

   mostrar_1=false;
   mostrar_2=true;

   mostraryocultar(){
     this.mostrar_1=!this.mostrar_1;
     this.mostrar_2=!this.mostrar_2;
    }

  mostrar1(){
    const pasoUno=this.paso1.nativeElement;
  /*   pasoUno.style.display="none"; */
  this.renderer2.setStyle(pasoUno,"display","none",)

  }

}