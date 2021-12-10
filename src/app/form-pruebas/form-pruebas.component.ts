import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
  FormArray,
} from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-form-pruebas",
  templateUrl: "./form-pruebas.component.html",
  styleUrls: ["./form-pruebas.component.css"],
})
export class FormPruebasComponent implements OnInit {
   form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  ngOnInit(): void {}
  private buildForm() {
    this.form = this.formBuilder.group({
      tipoTrabajador: ["", [Validators.required]],
      docIdent: ["", [Validators.required]],
      nroDocIdentidad: ["", [Validators.required]],
      complemento: ["", [Validators.minLength(2)]],
      pnombre: ["", [Validators.required]],
      snombre: ["", [Validators.required]],
      APaterno: ["", [Validators.required]],
      AMaterno: ["", [Validators.required]],
      ACasada: ["", []],
      fechaNacimiento: ["", [Validators.required]],
      nacionalidad: ["", [Validators.required]],
      genero: ["", [Validators.required]],
      departamento: ["", [Validators.required]],
      zona: ["", []],
      direccion: ["", []],
      nroVivienda: ["", []],
      referencia: ["", []],
      email: ["", [Validators.required, Validators.email]],
      celular: ["", [Validators.required, Validators.minLength(8)]],
      telefono: ["", [Validators.minLength(7)]],
      autorizacion: ["", [Validators.required]],
      derechohabientes: this.formBuilder.array([]),
      profesion: ["", []],
      ocupacion: ["", []],
      fechaInicioLaboral: ["", []],
      sector: ["", []],
    });
    /*   this.form.valueChanges.pipe(debounceTime(500))
    .subscribe(value=>{
      console.log(value);
    }); */
  }
  guardarDatos(event: Event) {
    //preventDefault evita que html siga con su comprotamiento nativo
    //en este caso recargar la pagina
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  /*  get pnombreg(){return this.form.get('pnombre')?.value} */
  //get pnombre (){return this.form.get('pnombre')}
  get pnombreg() {
    return this.form.get("pnombre");
  }
  get tipoTrabajador() {
    return this.form.get("tipoTrabajador");
  }
  get docIdent() {
    return this.form.get("docIdent");
  }
  get nroDocIdentidad() {
    return this.form.get("nroDocIdentidad");
  }
  get complemento() {
    return this.form.get("complemento");
  }

  get snombre() {
    return this.form.get("snombre");
  }
  get APaterno() {
    return this.form.get("APaterno");
  }
  get AMaterno() {
    return this.form.get("AMaterno");
  }
  get ACasada() {
    return this.form.get("ACasada");
  }
  get fechaNacimiento() {
    return this.form.get("fechaNacimiento");
  }
  get nacionalidad() {
    return this.form.get("nacionalidad");
  }
  get genero() {
    return this.form.get("genero");
  }
  get departamento() {
    return this.form.get("departamento");
  }
  get zona() {
    return this.form.get("zona");
  }
  get direccion() {
    return this.form.get("direccion");
  }
  get nroVivienda() {
    return this.form.get("nroVivienda");
  }
  get referencia() {
    return this.form.get("referencia");
  }
  get email() {
    return this.form.get("email");
  }
  get celular() {
    return this.form.get("celular");
  }
  get telefono() {
    return this.form.get("telefono");
  }
  get autorizacion() {
    return this.form.get("autorizacion");
  }
  get derechohabientes(){return this.form.get('derechohabientes') as FormArray}
  //***************************************************** Validaciones por campo*************************************
  get pnombregValido() {
    return this.pnombreg?.touched && this.pnombreg.valid;
  }
  get pnombregInvalido() {
    return this.pnombreg?.touched && this.pnombreg.invalid;
  }
  get tipoTrabajadorValido() {
    //  console.log(this.pnombreg?.touched && this.pnombreg.valid);
    return this.tipoTrabajador?.touched && this.tipoTrabajador.valid;
  }
  get tipoTrabajadorInvalido() {
    return this.tipoTrabajador?.touched && this.tipoTrabajador.invalid;
  }
  get docIdentValido() {
    return this.docIdent?.touched && this.docIdent.valid;
  }
  get docIdentInvalido() {
    return this.docIdent?.touched && this.docIdent.invalid;
  }

  get nroDocIdentidadValido() {
    return this.nroDocIdentidad?.touched && this.nroDocIdentidad.valid;
  }
  get nroDocIdentidadInvalido() {
    return this.nroDocIdentidad?.touched && this.nroDocIdentidad.invalid;
  }

  get complementoValido() {
    return this.complemento?.touched && this.complemento.valid;
  }
  get complementoInvalido() {
    return this.complemento?.touched && this.complemento.invalid;
  }

  get snombreValido() {
    return this.snombre?.touched && this.snombre.valid;
  }
  get snombreInvalido() {
    return this.snombre?.touched && this.snombre.invalid;
  }

  get APaternoValido() {
    return this.APaterno?.touched && this.APaterno.valid;
  }
  get APaternoInvalido() {
    return this.APaterno?.touched && this.APaterno.invalid;
  }

  get AMaternoValido() {
    return this.AMaterno?.touched && this.AMaterno.valid;
  }
  get AMaternoInvalido() {
    return this.AMaterno?.touched && this.AMaterno.invalid;
  }

  get ACasadaValido() {
    return this.ACasada?.touched && this.ACasada.valid;
  }
  get ACasadaInvalido() {
    return this.ACasada?.touched && this.ACasada.invalid;
  }

  get fechaNacimientoValido() {
    return this.fechaNacimiento?.touched && this.fechaNacimiento.valid;
  }
  get fechaNacimientoInvalido() {
    return this.fechaNacimiento?.touched && this.fechaNacimiento.invalid;
  }

  get nacionalidadValido() {
    return this.nacionalidad?.touched && this.nacionalidad.valid;
  }
  get nacionalidadInvalido() {
    return this.nacionalidad?.touched && this.nacionalidad.invalid;
  }

  get generoValido() {
    return this.genero?.touched && this.genero.valid;
  }
  get generoInvalido() {
    return this.genero?.touched && this.genero.invalid;
  }

  get departamentoValido() {
    return this.departamento?.touched && this.departamento.valid;
  }
  get departamentoInvalido() {
    return this.departamento?.touched && this.departamento.invalid;
  }

  get zonaValido() {
    return this.zona?.touched && this.zona.valid;
  }
  get zonaInvalido() {
    return this.zona?.touched && this.zona.invalid;
  }

  get direccionValido() {
    return this.direccion?.touched && this.direccion.valid;
  }
  get direccionInvalido() {
    return this.direccion?.touched && this.direccion.invalid;
  }

  get nroViviendaValido() {
    return this.nroVivienda?.touched && this.nroVivienda.valid;
  }
  get nroViviendaInvalido() {
    return this.nroVivienda?.touched && this.nroVivienda.invalid;
  }

  get referenciaValido() {
    return this.referencia?.touched && this.referencia.valid;
  }
  get referenciaInvalido() {
    return this.referencia?.touched && this.referencia.invalid;
  }

  get emailValido() {
    return this.email?.touched && this.email.valid;
  }
  get emailInvalido() {
    return this.email?.touched && this.email.invalid;
  }

  get celularValido() {
    return this.celular?.touched && this.celular.valid;
  }
  get celularInvalido() {
    return this.celular?.touched && this.celular.invalid;
  }

  get telefonoValido() {
    return this.telefono?.touched && this.telefono.valid;
  }
  get telefonoInvalido() {
    return this.telefono?.touched && this.telefono.invalid;
  }

  get autorizacionValido() {
    return this.autorizacion?.touched && this.autorizacion.valid;
  }
  get autorizacionInvalido() {
    return this.autorizacion?.touched && this.autorizacion.invalid;
  }

/**********************************************************  PASO 2  ****************************/

agregarDerechohabientes(){
  const DerHabientesFormGroup  = this.formBuilder.group({
    parentescoDH: '',
    tipoDocDH: '',
    nroDocIdenDH:'',
    complementoDH:'',
    pNombDH:'',
    sNombDH:'',
    paternoDH:'',
    maternoDH:'',
    apCasadaDH:'',
    genreroDH:'',
    fechaNaciDH:'',
    cuaDH:'',
  });
  this.derechohabientes.push(DerHabientesFormGroup);
}
removerDerechohabiente(indice:number){
  this.derechohabientes.removeAt(indice);
}
refrescar(){
  this.derechohabientes.controls.splice(0,this.derechohabientes.length);
}


}
