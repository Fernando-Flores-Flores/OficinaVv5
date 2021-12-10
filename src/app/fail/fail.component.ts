import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
} from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-fail",
  templateUrl: "./fail.component.html",
  styleUrls: ["./fail.component.css"],
})
export class FailComponent implements OnInit {
 
 /*  import { isNull } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: "app-forms-registro-empleador",
  templateUrl: "./forms-registro-empleador.component.html",
  styleUrls: ["./forms-registro-empleador.component.css"],
})
export class FormsRegistroEmpleadorComponent implements OnInit {
   */boton: string = "Siguiente Paso";
  constructor(private router: Router) { }

   empleadorFormControler!: FormGroup;



  ngOnInit(): void {

    this.empleadorFormControler = new FormGroup({
      codact: new FormControl('nulo'),
      rubro: new FormControl('Rubro Comercial'),
    });
  }

  onSubmit(){}

  rubros = [
    "Industrial",
    "Agricola",
    "Agroindustrial",
    "Mineras",
    "Comercio",
    "Servicios",
    "Construccion",
    "Financiero",
    "Comunicacion",
    "Seguros",
    "Educacion",
    "Judicial",
    "Transporte",
    "Salud",
    "Suministros",
    "Turismo",
    "Administracion Publica",
    "Policia",
    "Militares",
  ];

  industrial = [
    { act: "Petroleo", value: "01PET" },
    { act: "Bebidas", value: "123" },
    { act: "Tabaco", value: "xxx" },
    { act: "Textiles", value: "123" },
    { act: "Cuero", value: "123" },
    { act: "Madera", value: "123" },
    { act: "Papel", value: "123" },
    { act: "Cementera", value: "123" },
    { act: "Fabricacion-Minerales", value: "123" },
    { act: "Maquinaria y Equipo", value: "123" },
  ];

  policias = [{ act: "Policia", value: "" }];

  opciones = [{ act: "Actividad", value: "null" }];

  enCambio() {
    if(this.empleadorFormControler.get('rubro')?.value == 'nulo') 
        this.opciones=[{ act: "Actividad", value: "null" }];

    if (this.empleadorFormControler.get('rubro')?.value == "Industrial")
     { this.empleadorFormControler.patchValue({codact: '01PET'});
       this.opciones = this.industrial;}

    if(this.empleadorFormControler.get('rubro')?.value == "Mineras")
      this.opciones = this.industrial;

    if(this.empleadorFormControler.get('rubro')?.value == "Policia") 
       this.opciones = this.policias;
    
    console.log(this.empleadorFormControler.get('codact')?.value);
    

  }
}
