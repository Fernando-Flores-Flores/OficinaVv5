import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { FormArray, FormBuilder,Validators,FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-f-registro-sip",
  templateUrl: "./f-registro-sip.component.html",
  styleUrls: ["./f-registro-sip.component.css"],
})
export class FRegistroSIPComponent implements OnInit {
  sig: string = "Siguiente";
  ant: string = "Anterior";

  @ViewChild("paso1") paso1: ElementRef;
  @ViewChild("paso2") paso2: ElementRef;
  @ViewChild("paso3") paso3: ElementRef;
  @ViewChild("paso4") paso4: ElementRef;

  constructor(private renderer2: Renderer2,private formBuilder: FormBuilder) {
  }

/********************************************** */
 get telefonos(){
   return this.registerForm.get('telefonos') as FormArray;
 }

 registerForm = this.formBuilder.group({
 telefonos: this.formBuilder.array([])
 });

 agregarDerecho(){
   const HabienteFormGroup  = this.formBuilder.group({
     telefono: '',
     descripcion: ''
   });
   this.telefonos.push(HabienteFormGroup);
 }

 removerTelefono(indice: number) {
   this.telefonos.removeAt(indice);
 }

 submit() {
   if (!this.registerForm.valid) {
     alert('Alguna regla de validación no se está cumpliendo');
     return;
   }
   console.log(this.registerForm.value);
 }
  /******************************************** */

  ngOnInit(): void {}

  mostrar_1 = false;
  mostrar_2 = true;
  mostrar_3 = true;
  mostrar_4 = true;
 
 /*  mostrar_1 = false;
  mostrar_2 = false;
  mostrar_3 = false;
  mostrar_4 = false; */

  siguiente() {
    
    if (this.mostrar_1 == false) {
      this.mostrar_1 = !this.mostrar_1;
      this.mostrar_2 = !this.mostrar_2;
      const pasoDOS = this.paso2.nativeElement;
    this.renderer2.setStyle(pasoDOS, "background", "#0e6192");
    this.renderer2.setAttribute(this.paso2.nativeElement, "hover", "true");
    this.renderer2.setStyle(pasoDOS, "border-radius", "10px");
    } else {
      if (this.mostrar_2 == false) {
      //  this.mostrar_1 = true;
        this.mostrar_2 = true;
        this.mostrar_3 = !this.mostrar_3;
        const pasoT = this.paso3.nativeElement;
        this.renderer2.setStyle(pasoT, "background", "#0e6192");
        this.renderer2.setStyle(pasoT, "border-radius", "10px");
  
      } else {
        if (this.mostrar_3 == false) {
        //  this.mostrar_1 = true;
         // this.mostrar_2 = true;
          this.mostrar_3 = true;
          this.mostrar_4 = !this.mostrar_4;
          const pasoC = this.paso4.nativeElement;
          this.renderer2.setStyle(pasoC, "background", "#0e6192");
          this.renderer2.setStyle(pasoC, "border-radius", "10px");
          
  
        }
      }
    }
  }
  anterior() {
    if (this.mostrar_4 == false) {
      this.mostrar_4 = !this.mostrar_4;
      this.mostrar_3 = !this.mostrar_3;
      const pasoC = this.paso4.nativeElement;
      this.renderer2.setStyle(pasoC, "background", "none");
    } else {
      if (this.mostrar_3 == false) {
        this.mostrar_3 = !this.mostrar_3;
        this.mostrar_2 = !this.mostrar_2;
        const pasoT = this.paso3.nativeElement;
        this.renderer2.setStyle(pasoT, "background", "none");
      } else {
        if (this.mostrar_2 == false) {
          this.mostrar_2 = !this.mostrar_2;
          this.mostrar_1 = !this.mostrar_1;
          const pasoDOS = this.paso2.nativeElement;
          this.renderer2.setStyle(pasoDOS, "background", "none");
        }
      }
    }
  }

  mostrar1() {
    const pasoUno = this.paso1.nativeElement;
    /*   pasoUno.style.display="none"; */
    this.renderer2.setStyle(pasoUno, "display", "none");
  }






}
