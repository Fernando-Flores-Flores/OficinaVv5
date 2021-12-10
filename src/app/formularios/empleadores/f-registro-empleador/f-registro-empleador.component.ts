import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-f-registro-empleador",
  templateUrl: "./f-registro-empleador.component.html",
  styleUrls: ["./f-registro-empleador.component.css"],
})
export class FRegistroEmpleadorComponent implements OnInit {
  formEmp: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  ngOnInit(): void {}
  private buildForm() {
    this.formEmp = this.formBuilder.group({
      tipoDeclaracion: ["", [Validators.required]],
      lugarDeclaracion: ["", [Validators.required]],
      fechaDeclaracion: ["", [Validators.required]],
      //  tipoEmpleador: ["", [Validators.required]],
      oficina: ["", [Validators.required]],
      tipoIdentificacion: ["", [Validators.required]],
      nroIdentificacion: ["", [Validators.required]],
      codigoUnidadEjecutora: ["", [Validators.required]],
      fechaInicioActividades: ["", [Validators.required]],
      nomApeoRazonSocial: ["", [Validators.required]],
      rotuloComercial: ["", [Validators.required]],
      tipoEmpresa: ["", [Validators.required]],
      matriculaComercio: ["", [Validators.required]],
      sociedadComercial: ["", [Validators.required]],
      actividadEmpresa: ["", [Validators.required]],
      nroTrabajadores: ["", [Validators.required]],
      //paso 2 Datos del domicilio
      envioCorrespondencia: ["", [Validators.required]],
      departamento: ["", [Validators.required]],
      provincia: ["", [Validators.required]],
      ciudad: ["", [Validators.required]],
      zonaBarrio: ["", []],
      direccion: ["", []],
      nroVivienda: ["", [Validators.required]],
      referencia: ["", [Validators.required]],
      telefono: ["", [Validators.required]],
      celular: ["", [Validators.required]],
      correo: ["", [Validators.required, Validators.email]],
      //paso 3 Datos Representante legal
      tipoDocIdentidadR: ["", [Validators.required]],
      nroDocIdentidadR: ["", [Validators.required]],
      complementoR: ["", [Validators.min(2), Validators.max(2)]],
      priNombre: ["", [Validators.required]],
      segNombre: ["", [Validators.required]],
      priApellido: ["", [Validators.required]],
      segApellido: ["", []],
      apeCasada: ["", [Validators.required]],
      departamentoRep: ["", [Validators.required]],
      provinciaRep: ["", [Validators.required]],
      ciudadRep: ["", [Validators.required]],
      zonaBarrioRep: ["", [Validators.required]],
      direccionRep: ["", [Validators.required]],
      nroViviendaRep: ["", [Validators.required]],
      referenciaRep: ["", [Validators.required]],
      telefonoRep: ["", [Validators.required]],
      celularRep: ["", [Validators.required]],
      correoRep: ["", [Validators.required, Validators.email]],
      notario: ["", [Validators.required]],
      nroNotaria: ["", [Validators.required]],
      nroPoderRep: ["", [Validators.required]],
      fechaEmisionPoder: ["", [Validators.required]],
      uniPersonal: ["", []],
    });
    /*
  this.formEmp=this.formBuilder.group({
    tipoDeclaracion: ["", []],
   lugarDeclaracion: ["", []],
   fechaDeclaracion: ["", []],
 //  tipoEmpleador: ["", [Validators.required]],
   oficina: ["", []],
   tipoIdentificacion: ["", []],
   nroIdentificacion: ["", []],
   codigoUnidadEjecutora: ["", []],
   fechaInicioActividades: ["", []],
   nomApeoRazonSocial: ["", []],
   rotuloComercial: ["", []],
   tipoEmpresa: ["", []],
   matriculaComercio: ["", []],
   sociedadComercial: ["", []],
   actividadEmpresa: ["", []],
   nroTrabajadores: ["", []],
   //paso 2 Datos del domicilio
   envioCorrespondencia: ["", []],
   departamento: ["", []],
   provincia: ["", []],
   ciudad: ["", []],
   zonaBarrio: ["", []],
   direccion: ["", []],
   nroVivienda: ["", []],
   referencia: ["", []],
   telefono: ["", []],
   celular: ["", []],
   correo: ["", []],
   //paso 3 Datos Representante legal
   tipoDocIdentidadR: ["", []],
   nroDocIdentidadR: ["", []],
   complementoR: ["", []],
   priNombre: ["", []],
   segNombre: ["", []],
   priApellido: ["", []],
   segApellido: ["", []],
   apeCasada: ["", []],
   departamentoRep: ["", []],
   provinciaRep: ["", []],
   ciudadRep: ["", []],
   zonaBarrioRep: ["", []],
   direccionRep: ["", []],
   nroViviendaRep: ["", []],
   referenciaRep: ["", []],
   telefonoRep:["", []],
   celularRep: ["", []],
   correoRep: ["", []],
   notario: ["", []],
   nroNotaria: ["", []],
   nroPoderRep: ["", []],
   fechaEmisionPoder: ["", []],
   uniPersonal: ["", []], 
 
 });*/
  }
  guardarDatosEmpleador(event: Event) {
    event.preventDefault();
    if (this.formEmp.valid) {
      const value = this.formEmp.value;
      console.log(value);
    } else {
      this.formEmp.markAllAsTouched();
    }
  }
  /*   get tipoDeclaracion(){return this.formEmp.get("tipoDeclaracion")}
  get lugarDeclaracion(){return this.formEmp.get("lugarDeclaracion")}
  get fechaDeclaracion(){return this.formEmp.get("fechaDeclaracion")}
  get tipoEmpleador (){return this.formEmp.get("tipoEmpleador")}
  get oficina(){return this.formEmp.get("oficina")}
  get tipoIdentificacion(){return this.formEmp.get("tipoIdentificacion")}
  get nroIdentificacion(){return this.formEmp.get("nroIdentificacion")}
  get codigoUnidadEjecutora(){return this.formEmp.get("codigoUnidadEjecutora")}
  get fechaInicioActividades(){return this.formEmp.get("fechaInicioActividades")}
  get nomApeoRazonSocial(){return this.formEmp.get("nomApeoRazonSocial")}
  get rotuloComercial(){return this.formEmp.get("rotuloComercial")}
  get tipoEmpresa(){return this.formEmp.get("tipoEmpresa")}
  get matriculaComercio(){return this.formEmp.get("matriculaComercio")}
  get sociedadComercial(){return this.formEmp.get("sociedadComercial")}
  get actividadEmpresa(){return this.formEmp.get("actividadEmpresa")}
  get nroTrabajadores (){return this.formEmp.get("nroTrabajadores")}
 //paso 2
  get envioCorrespondencia(){return this.formEmp.get("envioCorrespondencia")}
  get departamento(){return this.formEmp.get("departamento")}
  get provincia(){return this.formEmp.get("provincia")}
  get ciudad(){return this.formEmp.get("ciudad")}
  get zonaBarrio (){return this.formEmp.get("zonaBarrio")}
  get direccion (){return this.formEmp.get("direccion")}
  get nroVivienda (){return this.formEmp.get("nroVivienda")}
  get referencia (){return this.formEmp.get("referencia")}
  get telefono(){return this.formEmp.get("telefono")}
  get celular (){return this.formEmp.get("celular")}
  get correo (){return this.formEmp.get("correo")}
  //paso 3
  get tipoDocIdentidadR(){return this.formEmp.get("tipoDocIdentidadR")}
  get nroDocIdentidadR(){return this.formEmp.get("nroDocIdentidadR")}
  get priNombre(){return this.formEmp.get("priNombre")}
  get segNombre (){return this.formEmp.get("segNombre")}
  get priApellido (){return this.formEmp.get("priApellido")}
  get apeCasada(){return this.formEmp.get("apeCasada")}
  get departamentoRep (){return this.formEmp.get("departamentoRep")}
  get provinciaRep(){return this.formEmp.get("provinciaRep")}
  get ciudadRep(){return this.formEmp.get("ciudadRep")}
  get zonaBarrioRep(){return this.formEmp.get("zonaBarrioRep")}
  get direccionRep(){return this.formEmp.get("direccionRep")}
  get nroViviendaRep(){return this.formEmp.get("nroViviendaRep")}
  get referenciaRep(){return this.formEmp.get("referenciaRep")}
  get telefonoRep(){return this.formEmp.get("telefonoRep")}
  get celularRep(){return this.formEmp.get("celularRep")}
  get correoRep(){return this.formEmp.get("correoRep")}
  get notario(){return this.formEmp.get("notario")}
  get nroNotaria(){return this.formEmp.get("nroNotaria")}
  get nroPoderRep(){return this.formEmp.get("nroPoderRep")}
  get fechaEmisionPoder(){return this.formEmp.get("fechaEmisionPoder")}
  get uniPersonal(){return this.formEmp.get("uniPersonal")} */
  get tipoDeclaracionValido() {
    return (
      this.formEmp.get("tipoDeclaracion")?.touched &&
      this.formEmp.get("tipoDeclaracion")?.valid
    );
  }
  get lugarDeclaracionValido() {
    return (
      this.formEmp.get("lugarDeclaracion")?.touched &&
      this.formEmp.get("lugarDeclaracion")?.valid
    );
  }
  get fechaDeclaracionValido() {
    return (
      this.formEmp.get("fechaDeclaracion")?.touched &&
      this.formEmp.get("fechaDeclaracion")?.valid
    );
  }
  get tipoEmpleadorValido() {
    return (
      this.formEmp.get("tipoEmpleador")?.touched &&
      this.formEmp.get("tipoEmpleador")?.valid
    );
  }
  get oficinaValido() {
    return (
      this.formEmp.get("oficina")?.touched && this.formEmp.get("oficina")?.valid
    );
  }
  get tipoIdentificacionValido() {
    return (
      this.formEmp.get("tipoIdentificacion")?.touched &&
      this.formEmp.get("tipoIdentificacion")?.valid
    );
  }
  get nroIdentificacionValido() {
    return (
      this.formEmp.get("nroIdentificacion")?.touched &&
      this.formEmp.get("nroIdentificacion")?.valid
    );
  }
  get complementoRValido() {
    return (
      this.formEmp.get("complementoR")?.touched &&
      this.formEmp.get("complementoR")?.valid
    );
  }
  get codigoUnidadEjecutoraValido() {
    return (
      this.formEmp.get("codigoUnidadEjecutora")?.touched &&
      this.formEmp.get("codigoUnidadEjecutora")?.valid
    );
  }
  get fechaInicioActividadesValido() {
    return (
      this.formEmp.get("fechaInicioActividades")?.touched &&
      this.formEmp.get("fechaInicioActividades")?.valid
    );
  }
  get nomApeoRazonSocialValido() {
    return (
      this.formEmp.get("nomApeoRazonSocial")?.touched &&
      this.formEmp.get("nomApeoRazonSocial")?.valid
    );
  }
  get rotuloComercialValido() {
    return (
      this.formEmp.get("rotuloComercial")?.touched &&
      this.formEmp.get("rotuloComercial")?.valid
    );
  }
  get tipoEmpresaValido() {
    return (
      this.formEmp.get("tipoEmpresa")?.touched &&
      this.formEmp.get("tipoEmpresa")?.valid
    );
  }
  get matriculaComercioValido() {
    return (
      this.formEmp.get("matriculaComercio")?.touched &&
      this.formEmp.get("matriculaComercio")?.valid
    );
  }
  get sociedadComercialValido() {
    return (
      this.formEmp.get("sociedadComercial")?.touched &&
      this.formEmp.get("sociedadComercial")?.valid
    );
  }
  get actividadEmpresaValido() {
    return (
      this.formEmp.get("actividadEmpresa")?.touched &&
      this.formEmp.get("actividadEmpresa")?.valid
    );
  }
  get nroTrabajadoresValido() {
    return (
      this.formEmp.get("nroTrabajadores")?.touched &&
      this.formEmp.get("nroTrabajadores")?.valid
    );
  }
  //paso ?.touched && this.formEmp.get("")?.valid2
  get envioCorrespondenciaValido() {
    return (
      this.formEmp.get("envioCorrespondencia")?.touched &&
      this.formEmp.get("envioCorrespondencia")?.valid
    );
  }
  get departamentoValido() {
    return (
      this.formEmp.get("departamento")?.touched &&
      this.formEmp.get("departamento")?.valid
    );
  }
  get provinciaValido() {
    return (
      this.formEmp.get("provincia")?.touched &&
      this.formEmp.get("provincia")?.valid
    );
  }
  get ciudadValido() {
    return (
      this.formEmp.get("ciudad")?.touched && this.formEmp.get("ciudad")?.valid
    );
  }
  get zonaBarrioValido() {
    return (
      this.formEmp.get("zonaBarrio")?.touched &&
      this.formEmp.get("zonaBarrio")?.valid
    );
  }
  get direccionValido() {
    return (
      this.formEmp.get("direccion")?.touched &&
      this.formEmp.get("direccion")?.valid
    );
  }
  get nroViviendaValido() {
    return (
      this.formEmp.get("nroVivienda")?.touched &&
      this.formEmp.get("nroVivienda")?.valid
    );
  }
  get referenciaValido() {
    return (
      this.formEmp.get("referencia")?.touched &&
      this.formEmp.get("referencia")?.valid
    );
  }
  get telefonoValido() {
    return (
      this.formEmp.get("telefono")?.touched &&
      this.formEmp.get("telefono")?.valid
    );
  }
  get celularValido() {
    return (
      this.formEmp.get("celular")?.touched && this.formEmp.get("celular")?.valid
    );
  }
  get correoValido() {
    return (
      this.formEmp.get("correo")?.touched && this.formEmp.get("correo")?.valid
    );
  }
  //paso ?.touched && this.formEmp.get("")?.invalid3
  get tipoDocIdentidadRValido() {
    return (
      this.formEmp.get("tipoDocIdentidadR")?.touched &&
      this.formEmp.get("tipoDocIdentidadR")?.valid
    );
  }
  get nroDocIdentidadRValido() {
    return (
      this.formEmp.get("nroDocIdentidadR")?.touched &&
      this.formEmp.get("nroDocIdentidadR")?.valid
    );
  }

  get priNombreValido() {
    return (
      this.formEmp.get("priNombre")?.touched &&
      this.formEmp.get("priNombre")?.valid
    );
  }
  get segNombreValido() {
    return (
      this.formEmp.get("segNombre")?.touched &&
      this.formEmp.get("segNombre")?.valid
    );
  }
  get priApellidoValido() {
    return (
      this.formEmp.get("priApellido")?.touched &&
      this.formEmp.get("priApellido")?.valid
    );
  }
  get segApellidoValido() {
    return (
      this.formEmp.get("segApellido")?.touched &&
      this.formEmp.get("segApellido")?.valid
    );
  }
  get apeCasadaValido() {
    return (
      this.formEmp.get("apeCasada")?.touched &&
      this.formEmp.get("apeCasada")?.valid
    );
  }
  get departamentoRepValido() {
    return (
      this.formEmp.get("departamentoRep")?.touched &&
      this.formEmp.get("departamentoRep")?.valid
    );
  }
  get provinciaRepValido() {
    return (
      this.formEmp.get("provinciaRep")?.touched &&
      this.formEmp.get("provinciaRep")?.valid
    );
  }
  get ciudadRepValido() {
    return (
      this.formEmp.get("ciudadRep")?.touched &&
      this.formEmp.get("ciudadRep")?.valid
    );
  }
  get zonaBarrioRepValido() {
    return (
      this.formEmp.get("zonaBarrioRep")?.touched &&
      this.formEmp.get("zonaBarrioRep")?.valid
    );
  }
  get direccionRepValido() {
    return (
      this.formEmp.get("direccionRep")?.touched &&
      this.formEmp.get("direccionRep")?.valid
    );
  }
  get nroViviendaRepValido() {
    return (
      this.formEmp.get("nroViviendaRep")?.touched &&
      this.formEmp.get("nroViviendaRep")?.valid
    );
  }
  get referenciaRepValido() {
    return (
      this.formEmp.get("referenciaRep")?.touched &&
      this.formEmp.get("referenciaRep")?.valid
    );
  }
  get telefonoRepValido() {
    return (
      this.formEmp.get("telefonoRep")?.touched &&
      this.formEmp.get("telefonoRep")?.valid
    );
  }
  get celularRepValido() {
    return (
      this.formEmp.get("celularRep")?.touched &&
      this.formEmp.get("celularRep")?.valid
    );
  }
  get correoRepValido() {
    return (
      this.formEmp.get("correoRep")?.touched &&
      this.formEmp.get("correoRep")?.valid
    );
  }
  get notarioValido() {
    return (
      this.formEmp.get("notario")?.touched && this.formEmp.get("notario")?.valid
    );
  }
  get nroNotariaValido() {
    return (
      this.formEmp.get("nroNotaria")?.touched &&
      this.formEmp.get("nroNotaria")?.valid
    );
  }
  get nroPoderRepValido() {
    return (
      this.formEmp.get("nroPoderRep")?.touched &&
      this.formEmp.get("nroPoderRep")?.valid
    );
  }
  get fechaEmisionPoderValido() {
    return (
      this.formEmp.get("fechaEmisionPoder")?.touched &&
      this.formEmp.get("fechaEmisionPoder")?.valid
    );
  }
  get uniPersonalValido() {
    return (
      this.formEmp.get("uniPersonal")?.touched &&
      this.formEmp.get("uniPersonal")?.valid
    );
  }
  //Geters Ininvalido
  get tipoDeclaracionInvalido() {
    return (
      this.formEmp.get("tipoDeclaracion")?.touched &&
      this.formEmp.get("tipoDeclaracion")?.invalid
    );
  }
  get lugarDeclaracionInvalido() {
    return (
      this.formEmp.get("lugarDeclaracion")?.touched &&
      this.formEmp.get("lugarDeclaracion")?.invalid
    );
  }
  get fechaDeclaracionInvalido() {
    return (
      this.formEmp.get("fechaDeclaracion")?.touched &&
      this.formEmp.get("fechaDeclaracion")?.invalid
    );
  }
  get tipoEmpleadorInvalido() {
    return (
      this.formEmp.get("tipoEmpleador")?.touched &&
      this.formEmp.get("tipoEmpleador")?.invalid
    );
  }
  get oficinaInvalido() {
    return (
      this.formEmp.get("oficina")?.touched &&
      this.formEmp.get("oficina")?.invalid
    );
  }
  get tipoIdentificacionInvalido() {
    return (
      this.formEmp.get("tipoIdentificacion")?.touched &&
      this.formEmp.get("tipoIdentificacion")?.invalid
    );
  }
  get nroIdentificacionInvalido() {
    return (
      this.formEmp.get("nroIdentificacion")?.touched &&
      this.formEmp.get("nroIdentificacion")?.invalid
    );
  }
  get codigoUnidadEjecutoraInvalido() {
    return (
      this.formEmp.get("codigoUnidadEjecutora")?.touched &&
      this.formEmp.get("codigoUnidadEjecutora")?.invalid
    );
  }
  get fechaInicioActividadesInvalido() {
    return (
      this.formEmp.get("fechaInicioActividades")?.touched &&
      this.formEmp.get("fechaInicioActividades")?.invalid
    );
  }
  get nomApeoRazonSocialInvalido() {
    return (
      this.formEmp.get("nomApeoRazonSocial")?.touched &&
      this.formEmp.get("nomApeoRazonSocial")?.invalid
    );
  }
  get rotuloComercialInvalido() {
    return (
      this.formEmp.get("rotuloComercial")?.touched &&
      this.formEmp.get("rotuloComercial")?.invalid
    );
  }
  get tipoEmpresaInvalido() {
    return (
      this.formEmp.get("tipoEmpresa")?.touched &&
      this.formEmp.get("tipoEmpresa")?.invalid
    );
  }
  get matriculaComercioInvalido() {
    return (
      this.formEmp.get("matriculaComercio")?.touched &&
      this.formEmp.get("matriculaComercio")?.invalid
    );
  }
  get sociedadComercialInvalido() {
    return (
      this.formEmp.get("sociedadComercial")?.touched &&
      this.formEmp.get("sociedadComercial")?.invalid
    );
  }
  get actividadEmpresaInvalido() {
    return (
      this.formEmp.get("actividadEmpresa")?.touched &&
      this.formEmp.get("actividadEmpresa")?.invalid
    );
  }
  get nroTrabajadoresInvalido() {
    return (
      this.formEmp.get("nroTrabajadores")?.touched &&
      this.formEmp.get("nroTrabajadores")?.invalid
    );
  }
  //paso ?.touched && this.formEmp.get("")?.invalid2
  get envioCorrespondenciaInvalido() {
    return (
      this.formEmp.get("envioCorrespondencia")?.touched &&
      this.formEmp.get("envioCorrespondencia")?.invalid
    );
  }
  get departamentoInvalido() {
    return (
      this.formEmp.get("departamento")?.touched &&
      this.formEmp.get("departamento")?.invalid
    );
  }
  get provinciaInvalido() {
    return (
      this.formEmp.get("provincia")?.touched &&
      this.formEmp.get("provincia")?.invalid
    );
  }
  get ciudadInvalido() {
    return (
      this.formEmp.get("ciudad")?.touched && this.formEmp.get("ciudad")?.invalid
    );
  }
  get zonaBarrioInvalido() {
    return (
      this.formEmp.get("zonaBarrio")?.touched &&
      this.formEmp.get("zonaBarrio")?.invalid
    );
  }
  get direccionInvalido() {
    return (
      this.formEmp.get("direccion")?.touched &&
      this.formEmp.get("direccion")?.invalid
    );
  }
  get nroViviendaInvalido() {
    return (
      this.formEmp.get("nroVivienda")?.touched &&
      this.formEmp.get("nroVivienda")?.invalid
    );
  }
  get referenciaInvalido() {
    return (
      this.formEmp.get("referencia")?.touched &&
      this.formEmp.get("referencia")?.invalid
    );
  }
  get telefonoInvalido() {
    return (
      this.formEmp.get("telefono")?.touched &&
      this.formEmp.get("telefono")?.invalid
    );
  }
  get celularInvalido() {
    return (
      this.formEmp.get("celular")?.touched &&
      this.formEmp.get("celular")?.invalid
    );
  }
  get correoInvalido() {
    return (
      this.formEmp.get("correo")?.touched && this.formEmp.get("correo")?.invalid
    );
  }
  //paso ?.touched && this.formEmp.get("")?.valid3
  get tipoDocIdentidadRInvalido() {
    return (
      this.formEmp.get("tipoDocIdentidadR")?.touched &&
      this.formEmp.get("tipoDocIdentidadR")?.invalid
    );
  }
  get nroDocIdentidadRInvalido() {
    return (
      this.formEmp.get("nroDocIdentidadR")?.touched &&
      this.formEmp.get("nroDocIdentidadR")?.invalid
    );
  }
  get complementoRInvalido() {
    return (
      this.formEmp.get("complementoR")?.touched &&
      this.formEmp.get("complementoR")?.invalid
    );
  }
  get priNombreInvalido() {
    return (
      this.formEmp.get("priNombre")?.touched &&
      this.formEmp.get("priNombre")?.invalid
    );
  }
  get segNombreInvalido() {
    return (
      this.formEmp.get("segNombre")?.touched &&
      this.formEmp.get("segNombre")?.invalid
    );
  }
  get priApellidoInvalido() {
    return (
      this.formEmp.get("priApellido")?.touched &&
      this.formEmp.get("priApellido")?.invalid
    );
  }
  get segApellidoInvalido() {
    return (
      this.formEmp.get("segApellido")?.touched &&
      this.formEmp.get("segApellido")?.invalid
    );
  }

  get apeCasadaInvalido() {
    return (
      this.formEmp.get("apeCasada")?.touched &&
      this.formEmp.get("apeCasada")?.invalid
    );
  }
  get departamentoRepInvalido() {
    return (
      this.formEmp.get("departamentoRep")?.touched &&
      this.formEmp.get("departamentoRep")?.invalid
    );
  }
  get provinciaRepInvalido() {
    return (
      this.formEmp.get("provinciaRep")?.touched &&
      this.formEmp.get("provinciaRep")?.invalid
    );
  }
  get ciudadRepInvalido() {
    return (
      this.formEmp.get("ciudadRep")?.touched &&
      this.formEmp.get("ciudadRep")?.invalid
    );
  }
  get zonaBarrioRepInvalido() {
    return (
      this.formEmp.get("zonaBarrioRep")?.touched &&
      this.formEmp.get("zonaBarrioRep")?.invalid
    );
  }
  get direccionRepInvalido() {
    return (
      this.formEmp.get("direccionRep")?.touched &&
      this.formEmp.get("direccionRep")?.invalid
    );
  }
  get nroViviendaRepInvalido() {
    return (
      this.formEmp.get("nroViviendaRep")?.touched &&
      this.formEmp.get("nroViviendaRep")?.invalid
    );
  }
  get referenciaRepInvalido() {
    return (
      this.formEmp.get("referenciaRep")?.touched &&
      this.formEmp.get("referenciaRep")?.invalid
    );
  }
  get telefonoRepInvalido() {
    return (
      this.formEmp.get("telefonoRep")?.touched &&
      this.formEmp.get("telefonoRep")?.invalid
    );
  }
  get celularRepInvalido() {
    return (
      this.formEmp.get("celularRep")?.touched &&
      this.formEmp.get("celularRep")?.invalid
    );
  }
  get correoRepInvalido() {
    return (
      this.formEmp.get("correoRep")?.touched &&
      this.formEmp.get("correoRep")?.invalid
    );
  }
  get notarioInvalido() {
    return (
      this.formEmp.get("notario")?.touched &&
      this.formEmp.get("notario")?.invalid
    );
  }
  get nroNotariaInvalido() {
    return (
      this.formEmp.get("nroNotaria")?.touched &&
      this.formEmp.get("nroNotaria")?.invalid
    );
  }
  get nroPoderRepInvalido() {
    return (
      this.formEmp.get("nroPoderRep")?.touched &&
      this.formEmp.get("nroPoderRep")?.invalid
    );
  }
  get fechaEmisionPoderInvalido() {
    return (
      this.formEmp.get("fechaEmisionPoder")?.touched &&
      this.formEmp.get("fechaEmisionPoder")?.invalid
    );
  }
  get uniPersonalInvalido() {
    return (
      this.formEmp.get("uniPersonal")?.touched &&
      this.formEmp.get("uniPersonal")?.invalid
    );
  }
}
