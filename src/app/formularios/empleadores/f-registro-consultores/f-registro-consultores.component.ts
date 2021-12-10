import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-f-registro-consultores",
  templateUrl: "./f-registro-consultores.component.html",
  styleUrls: ["./f-registro-consultores.component.css"],
})
export class FRegistroConsultoresComponent implements OnInit {
  ngOnInit(): void {}
  formConsu: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  private buildForm() {
    this.formConsu = this.formBuilder.group({
      //DATOS GENERALES
      fechaPresentacion: ["", [Validators.required]],
      docpresentados: ["", [Validators.required]],
      nroHojasAdjuntas: ["", [Validators.required]],
      nroAseReportados: ["", [Validators.required]],
      constituyaAgeReten: ["", []],
      //DATOS CONTRATANTE
      tipoIdentificacion: ["", [Validators.required]],
      nroIdentificacion: ["", [Validators.required]],
      complemento: ["", [Validators.min(2), Validators.max(2)]],
    
      codigoUnidadEjecutora: ["", [Validators.required]],
      nomApeoRazonSocial: ["", [Validators.required]],
      actividadEcono: ["", [Validators.required]],
      //direccion contratante
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
      //Datos representante legal
      tipoIdentificacionRL: ["", [Validators.required]],
      nroDocIdenRL: ["", [Validators.required]],
      complementoRL: ["", [Validators.min(2), Validators.max(2)]],
      priNombreRL: ["", [Validators.required]],
      segNombreRL: ["", [Validators.required]],
      priApellidoRL: ["", [Validators.required]],
      segApellidoRL: ["", []],
      apeCasadaRL: ["", [Validators.required]],
      //Direccion reresentante legal

      departamentoRL: ["", [Validators.required]],
      provinciaRL: ["", [Validators.required]],
      ciudadRL: ["", [Validators.required]],
      zonaRL: ["", []],
      direccionRL: ["", []],
      nroViviendaRL: ["", [Validators.required]],
      referenciaRL: ["", [Validators.required]],
      telefonoRL: ["", [Validators.required]],
      celularRL: ["", [Validators.required]],
      correoRL: ["", [Validators.required, Validators.email]],
    });
  }
  guardarDatosEmpleador(event: Event) {
    event.preventDefault();
    if (this.formConsu.valid) {
      const value = this.formConsu.value;
      console.log(value);
    } else {
      this.formConsu.markAllAsTouched();
    }
  }
  get fechaPresentacionValido() {
    return (
      this.formConsu.get("fechaPresentacion")?.touched &&
      this.formConsu.get("fechaPresentacion")?.valid
    );
  }
  get fechaPresentacionInvalido() {
    return (
      this.formConsu.get("fechaPresentacion")?.touched &&
      this.formConsu.get("fechaPresentacion")?.invalid
    );
  }

  get docpresentadosValido() {
    return (
      this.formConsu.get("docpresentados")?.touched &&
      this.formConsu.get("docpresentados")?.valid
    );
  }
  get docpresentadosInvalido() {
    return (
      this.formConsu.get("docpresentados")?.touched &&
      this.formConsu.get("docpresentados")?.invalid
    );
  }
  get nroHojasAdjuntasValido() {
    return (
      this.formConsu.get("nroHojasAdjuntas")?.touched &&
      this.formConsu.get("nroHojasAdjuntas")?.valid
    );
  }
  get nroHojasAdjuntasInvalido() {
    return (
      this.formConsu.get("nroHojasAdjuntas")?.touched &&
      this.formConsu.get("nroHojasAdjuntas")?.invalid
    );
  }

  get nroAseReportadosValido() {
    return (
      this.formConsu.get("nroAseReportados")?.touched &&
      this.formConsu.get("nroAseReportados")?.valid
    );
  }
  get nroAseReportadosInvalido() {
    return (
      this.formConsu.get("nroAseReportados")?.touched &&
      this.formConsu.get("nroAseReportados")?.invalid
    );
  }
  get constituyaAgeRetenValido() {
    return (
      this.formConsu.get("constituyaAgeReten")?.touched &&
      this.formConsu.get("constituyaAgeReten")?.valid
    );
  }
  get constituyaAgeRetenInvalido() {
    return (
      this.formConsu.get("constituyaAgeReten")?.touched &&
      this.formConsu.get("constituyaAgeReten")?.invalid
    );
  }
  get tipoIdentificacionValido() {
    return (
      this.formConsu.get("tipoIdentificacion")?.touched &&
      this.formConsu.get("tipoIdentificacion")?.valid
    );
  }
  get tipoIdentificacionInvalido() {
    return (
      this.formConsu.get("tipoIdentificacion")?.touched &&
      this.formConsu.get("tipoIdentificacion")?.invalid
    );
  }

  get nroIdentificacionValido() {
    return (
      this.formConsu.get("nroIdentificacion")?.touched &&
      this.formConsu.get("nroIdentificacion")?.valid
    );
  }
  get nroIdentificacionInvalido() {
    return (
      this.formConsu.get("nroIdentificacion")?.touched &&
      this.formConsu.get("nroIdentificacion")?.invalid
    );
  }
  get complementoValido() {
    return (
      this.formConsu.get("complemento")?.touched &&
      this.formConsu.get("complemento")?.valid
    );
  }
  get complementoInvalido() {
    return (
      this.formConsu.get("complemento")?.touched &&
      this.formConsu.get("complemento")?.invalid
    );
  }
  get codigoUnidadEjecutoraValido() {
    return (
      this.formConsu.get("codigoUnidadEjecutora")?.touched &&
      this.formConsu.get("codigoUnidadEjecutora")?.valid
    );
  }
  get codigoUnidadEjecutoraInvalido() {
    return (
      this.formConsu.get("codigoUnidadEjecutora")?.touched &&
      this.formConsu.get("codigoUnidadEjecutora")?.invalid
    );
  }
  get nomApeoRazonSocialValido() {
    return (
      this.formConsu.get("nomApeoRazonSocial")?.touched &&
      this.formConsu.get("nomApeoRazonSocial")?.valid
    );
  }
  get nomApeoRazonSocialInvalido() {
    return (
      this.formConsu.get("nomApeoRazonSocial")?.touched &&
      this.formConsu.get("nomApeoRazonSocial")?.invalid
    );
  }
  get actividadEconoValido() {
    return (
      this.formConsu.get("actividadEcono")?.touched &&
      this.formConsu.get("actividadEcono")?.valid
    );
  }
  get actividadEconoInvalido() {
    return (
      this.formConsu.get("actividadEcono")?.touched &&
      this.formConsu.get("actividadEcono")?.invalid
    );
  }
  get departamentoValido() {
    return (
      this.formConsu.get("departamento")?.touched &&
      this.formConsu.get("departamento")?.valid
    );
  }
  get departamentoInvalido() {
    return (
      this.formConsu.get("departamento")?.touched &&
      this.formConsu.get("departamento")?.invalid
    );
  }
  get provinciaValido() {
    return (
      this.formConsu.get("provincia")?.touched &&
      this.formConsu.get("provincia")?.valid
    );
  }
  get provinciaInvalido() {
    return (
      this.formConsu.get("provinciaRep")?.touched &&
      this.formConsu.get("provinciaRep")?.invalid
    );
  }

  get ciudadValido() {
    return (
      this.formConsu.get("ciudad")?.touched &&
      this.formConsu.get("ciudad")?.valid
    );
  }

  get ciudadInvalido() {
    return (
      this.formConsu.get("ciudadRep")?.touched &&
      this.formConsu.get("ciudadRep")?.invalid
    );
  }
  get zonaBarrioValido() {
    return (
      this.formConsu.get("zonaBarrio")?.touched &&
      this.formConsu.get("zonaBarrio")?.valid
    );
  }
  get direccionValido() {
    return (
      this.formConsu.get("direccion")?.touched &&
      this.formConsu.get("direccion")?.valid
    );
  }
  get nroViviendaValido() {
    return (
      this.formConsu.get("nroVivienda")?.touched &&
      this.formConsu.get("nroVivienda")?.valid
    );
  }
  get referenciaValido() {
    return (
      this.formConsu.get("referencia")?.touched &&
      this.formConsu.get("referencia")?.valid
    );
  }
  get telefonoValido() {
    return (
      this.formConsu.get("telefono")?.touched &&
      this.formConsu.get("telefono")?.valid
    );
  }
  get celularValido() {
    return (
      this.formConsu.get("celular")?.touched &&
      this.formConsu.get("celular")?.valid
    );
  }
  get correoValido() {
    return (
      this.formConsu.get("correo")?.touched &&
      this.formConsu.get("correo")?.valid
    );
  }
  get zonaBarrioInvalido() {
    return (
      this.formConsu.get("zonaBarrio")?.touched &&
      this.formConsu.get("zonaBarrio")?.invalid
    );
  }
  get direccionInvalido() {
    return (
      this.formConsu.get("direccion")?.touched &&
      this.formConsu.get("direccion")?.invalid
    );
  }
  get nroViviendaInvalido() {
    return (
      this.formConsu.get("nroVivienda")?.touched &&
      this.formConsu.get("nroVivienda")?.invalid
    );
  }
  get referenciaInvalido() {
    return (
      this.formConsu.get("referencia")?.touched &&
      this.formConsu.get("referencia")?.invalid
    );
  }
  get telefonoInvalido() {
    return (
      this.formConsu.get("telefono")?.touched &&
      this.formConsu.get("telefono")?.invalid
    );
  }
  get celularInvalido() {
    return (
      this.formConsu.get("celular")?.touched &&
      this.formConsu.get("celular")?.invalid
    );
  }
  get correoInvalido() {
    return (
      this.formConsu.get("correo")?.touched &&
      this.formConsu.get("correo")?.invalid
    );
  }
  get tipoIdentificacionRLValido() {
    return (
      this.formConsu.get("tipoIdentificacionRL")?.touched &&
      this.formConsu.get("tipoIdentificacionRL")?.invalid
    );
  }
  get tipoIdentificacionRLInvalido() {
    return (
      this.formConsu.get("tipoIdentificacionRL")?.touched &&
      this.formConsu.get("tipoIdentificacionRL")?.invalid
    );
  }
  get nroDocIdenRLValido() {
    return (
      this.formConsu.get("nroDocIdenRL")?.touched &&
      this.formConsu.get("nroDocIdenRL")?.valid
    );
  }
  get nroDocIdenRLInvalido() {
    return (
      this.formConsu.get("nroDocIdenRL")?.touched &&
      this.formConsu.get("nroDocIdenRL")?.invalid
    );
  }
  get complementoRLValido() {
    return (
      this.formConsu.get("complementoRL")?.touched &&
      this.formConsu.get("complementoRL")?.valid
    );
  }
  get complementoRLInvalido() {
    return (
      this.formConsu.get("complementoRL")?.touched &&
      this.formConsu.get("complementoRL")?.invalid
    );
  }
  get priNombreRLValido() {
    return (
      this.formConsu.get("priNombreRL")?.touched &&
      this.formConsu.get("priNombreRL")?.valid
    );
  }
  get segNombreRLValido() {
    return (
      this.formConsu.get("segNombreRL")?.touched &&
      this.formConsu.get("segNombreRL")?.valid
    );
  }
  get priApellidoRLValido() {
    return (
      this.formConsu.get("priApellidoRL")?.touched &&
      this.formConsu.get("priApellidoRL")?.valid
    );
  }
  get segApellidoRLValido() {
    return (
      this.formConsu.get("segApellidoRL")?.touched &&
      this.formConsu.get("segApellidoRL")?.valid
    );
  }
  get apeCasadaRLValido() {
    return (
      this.formConsu.get("apeCasadaRL")?.touched &&
      this.formConsu.get("apeCasadaRL")?.valid
    );
  }
  get priNombreRLInvalido() {
    return (
      this.formConsu.get("priNombreRL")?.touched &&
      this.formConsu.get("priNombreRL")?.invalid
    );
  }
  get segNombreRLInvalido() {
    return (
      this.formConsu.get("segNombreRL")?.touched &&
      this.formConsu.get("segNombreRL")?.invalid
    );
  }
  get priApellidoRLInvalido() {
    return (
      this.formConsu.get("priApellidoRL")?.touched &&
      this.formConsu.get("priApellidoRL")?.invalid
    );
  }
  get segApellidoRLInvalido() {
    return (
      this.formConsu.get("segApellidoRL")?.touched &&
      this.formConsu.get("segApellidoRL")?.invalid
    );
  }

  get apeCasadaRLInvalido() {
    return (
      this.formConsu.get("apeCasadaRL")?.touched &&
      this.formConsu.get("apeCasadaRL")?.invalid
    );
  }

  get departamentoRLValido() {
    return (
      this.formConsu.get("departamentoRep")?.touched &&
      this.formConsu.get("departamentoRep")?.valid
    );
  }

  get departamentoRLInvalido() {
    return (
      this.formConsu.get("departamentoRep")?.touched &&
      this.formConsu.get("departamentoRep")?.invalid
    );
  }
  get provinciaRLValido() {
    return (
      this.formConsu.get("provincia")?.touched &&
      this.formConsu.get("provincia")?.valid
    );
  }

  get provinciaRLInvalido() {
    return (
      this.formConsu.get("provincia")?.touched &&
      this.formConsu.get("provincia")?.invalid
    );
  }

  get ciudadRLValido() {
    return (
      this.formConsu.get("ciudadRL")?.touched &&
      this.formConsu.get("ciudadRL")?.valid
    );
  }
    get ciudadRLInvalido() {
    return (
      this.formConsu.get("ciudadRL")?.touched &&
      this.formConsu.get("ciudadRL")?.invalid
    );
  }
  get zonaRLValido() {
    return (
      this.formConsu.get("zonaRL")?.touched &&
      this.formConsu.get("zonaRL")?.valid
    );
  }  get zonaRLInvalido() {
    return (
      this.formConsu.get("zonaRL")?.touched &&
      this.formConsu.get("zonaRL")?.invalid
    );
  }
  get direccionRLValido() {
    return (
      this.formConsu.get("direccionRep")?.touched &&
      this.formConsu.get("direccionRep")?.valid
    );
  }  get direccionRLInvalido() {
    return (
      this.formConsu.get("direccionRL")?.touched &&
      this.formConsu.get("direccionRL")?.invalid
    );
  }

  get nroViviendaRLValido() {
    return (
      this.formConsu.get("nroViviendaRL")?.touched &&
      this.formConsu.get("nroViviendaRL")?.valid
    );
  }
  
  get nroViviendaRLInvalido() {
    return (
      this.formConsu.get("nroViviendaRL")?.touched &&
      this.formConsu.get("nroViviendaRL")?.invalid
    );
  }
  get referenciaRLValido() {
    return (
      this.formConsu.get("referenciaRL")?.touched &&
      this.formConsu.get("referenciaRL")?.valid
    );
  }
  get telefonoRLValido() {
    return (
      this.formConsu.get("telefonoRL")?.touched &&
      this.formConsu.get("telefonoRL")?.invalid
    );
  }
  get celularRLValido() {
    return (
      this.formConsu.get("celularRL")?.touched &&
      this.formConsu.get("celularRL")?.valid
    );
  }
  get correoRLValido() {
    return (
      this.formConsu.get("correoRL")?.touched &&
      this.formConsu.get("correoRL")?.valid
    );
  }
  get referenciaRLInvalido() {
    return (
      this.formConsu.get("referenciaRL")?.touched &&
      this.formConsu.get("referenciaRL")?.invalid
    );
  }
  get telefonoRLInvalido() {
    return (
      this.formConsu.get("telefonoRL")?.touched &&
      this.formConsu.get("telefonoRL")?.invalid
    );
  }
  get celularRLInvalido() {
    return (
      this.formConsu.get("celularRL")?.touched &&
      this.formConsu.get("celularRL")?.invalid
    );
  }
  get correoRLInvalido() {
    return (
      this.formConsu.get("correoRL")?.touched &&
      this.formConsu.get("correoRL")?.invalid
    );
  }


}