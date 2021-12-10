import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-derechohabientes",
  templateUrl: "./derechohabientes.component.html",
  styleUrls: ["./derechohabientes.component.css"],
})
export class DerechohabientesComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  ngOnInit(): void { }
  private buildForm() {
    this.form = this.formBuilder.group({
      tipoTrabajador: ["", [Validators.required]],
      docIdent: ["", [Validators.required]],
      nroDocIdentidad: ["", [Validators.required]],
      complemento: ["", [Validators.minLength(2), Validators.maxLength(2)]],
      pnombre: ["", [Validators.required]],
      snombre: ["", []],
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
      profesion: ["", [Validators.required]],
      ocupacion: ["", [Validators.required]],
      fechaIniLab: ["", [Validators.required]],
      sector: ["", [Validators.required]],
      tipoIdentificaionEmpleador: ["", [Validators.required]],
      nroIdenEmpleador: ["", [Validators.required]],
      entFinan: ["", [Validators.required]],
      nroCuenta: ["", [Validators.required]]
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
/*   get pnombreg() {
    return this.form.get("pnombre");
  } */
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
  get derechohabientes() {
    return this.form.get("derechohabientes") as FormArray;
  }
  //************************ Paso3 **************************
  get profesion() {
    return this.form.get("profesion");
  }
  get ocupacion() {
    return this.form.get("ocupacion");
  }
  get fechaIniLab() {
    return this.form.get("fechaIniLab");
  }
  get sector() {
    return this.form.get("sector");
  }
  /***************************** Paso 4 ************************* */
  get tipoIdentificaionEmpleador(){
    return this.form.get("tipoIdentificaionEmpleador");
  }
  get nroIdenEmpleador(){
    return this.form.get("nroIdenEmpleador");
  }
  get entFinan(){
    return this.form.get("entFinan");
  }
  get nroCuenta(){
    return this.form.get("nroCuenta");
  }

  //***************************************************** Validaciones por campo*************************************

  
 /*  get pnombregValido() {
    return this.pnombreg?.touched && this.pnombreg.valid;
  } */
  get pnombregValido() {
    return this.form.get('pnombre')?.touched && this.form.get('pnombre')?.valid;
  }
  get pnombregInvalido() {
    return this.form.get('pnombre')?.touched && this.form.get('pnombre')?.invalid;  }
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

  get profesionValido() {
    return this.profesion?.touched && this.profesion.valid;
  }
  
  get profesionInvalido() {
    return this.profesion?.touched && this.profesion.invalid;
  }
  get ocupacionValido() {
    return this.ocupacion?.touched && this.ocupacion.valid;
  }
  get ocupacionInvalido() {
    return this.ocupacion?.touched && this.ocupacion.invalid;
  }
  get sectorValido() {
    return this.sector?.touched && this.sector.valid;
  }
  get sectorInvalido() {
    return this.sector?.touched && this.sector.invalid;
  }
  get fechainicioLaboralValido() {
    return this.fechaIniLab?.touched && this.fechaIniLab.valid;
  }
  get fechainicioLaboralInvalido() {
    return this.fechaIniLab?.touched && this.fechaIniLab.invalid;
  }
  get tipoIdentificaionEmpleadorValido(){
    return this.tipoIdentificaionEmpleador?.touched && this.tipoIdentificaionEmpleador.valid;
  }
  get tipoIdentificaionEmpleadorInvalido(){
    return this.tipoIdentificaionEmpleador?.touched && this.tipoIdentificaionEmpleador.invalid;
  }
  
  get nroIdenEmpleadorValido(){
    return this.nroIdenEmpleador?.touched && this.nroIdenEmpleador.valid;
  }
  get nroIdenEmpleadorInvalido(){
    return this.nroIdenEmpleador?.touched && this.nroIdenEmpleador.invalid;
  }

  get entFinanValido(){
    return this.entFinan?.touched && this.entFinan.valid;
  }
  get entFinanInvalido(){
    return this.entFinan?.touched && this.entFinan.invalid;
  }

  get nroCuentaValido(){
    return this.nroCuenta?.touched && this.nroCuenta.valid;
  }
  get nroCuentaInvalido(){
    return this.nroCuenta?.touched && this.nroCuenta.invalid;
  }


  /**********************************************************  PASO 2  ****************************/
  agregarDerecho() {
    const HabienteFormGroup = this.formBuilder.group({
      parentescoDH: "",
      tipoDocDH: "",
      nroDocIdenDH: "",
      complementoDH: "",
      pNombDH: "",
      sNombDH: "",
      paternoDH: "",
      maternoDH: "",
      apCasadaDH: "",
      genreroDH: "",
      fechaNaciDH: "",
      cuaDH: "",
    });
    this.derechohabientess.push(HabienteFormGroup);
  }
  get derechohabientess() {
    return this.form.get("derechohabientes") as FormArray;
  }

  removerDerechohabiente(indice: number) {
    this.derechohabientes.removeAt(indice);
  }

  /*  agregarDerechohabientes() {
     const DerHabientesFormGroup = this.formBuilder.group({
       parentescoDH: "",
       tipoDocDH: "",
       nroDocIdenDH: "",
       complementoDH: "",
       pNombDH: "",
       sNombDH: "",
       paternoDH: "",
       maternoDH: "",
       apCasadaDH: "",
       genreroDH: "",
       fechaNaciDH: "",
       cuaDH: "",
     });
     this.derechohabientes.push(DerHabientesFormGroup);
   }
   removerTelefono(indice: number) {
     this.derechohabientess.removeAt(indice);
   } */
  refrescar() {
    this.derechohabientes.controls.splice(0, this.derechohabientes.length);
  }
}
