import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-cert-no-adeudo-empresa-no-registrada",
  templateUrl: "./cert-no-adeudo-empresa-no-registrada.component.html",
  styleUrls: ["./cert-no-adeudo-empresa-no-registrada.component.css"],
})
export class CertNoAdeudoEmpresaNoRegistradaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}
  departamentos: Array<any> = [
    {
      value: "1",
      depto: "La Paz",
    },
    {
      value: "2",
      depto: "Oruro",
    },
    {
      value: "3",
      depto: "Potosi",
    },
    {
      value: "4",
      depto: "Santa Cruz",
    },
    {
      value: "5",
      depto: "Beni",
    },
    {
      value: "6",
      depto: "Pando",
    },
    {
      value: "7",
      depto: "Cochabamba",
    },
    {
      value: "8",
      depto: "Chuquisaca",
    },
    {
      value: "9",
      depto: "Tarija",
    },
  ];
  mostrar = true;
  mostrarCet = true;
  mostrarCampos() {
    if (this.mostrar == false) {
      this.mostrarCet = !this.mostrarCet;
    }
    if (this.mostrar) {
      this.mostrar = !this.mostrar;
    }
  }

  formCerNoAdeEmprNoReg: FormGroup;
  private buildForm() {
    this.formCerNoAdeEmprNoReg = this.formBuilder.group({
      TipoIdentificación: ["", [Validators.required]],
      NrodeIdentificación: ["", [Validators.required]],
      DepartamentoRegional: ["", [Validators.required]],
      RazónSocial: ["", [Validators.required]],
      RepresentanteLegal: ["", [Validators.required]],
    });
  }
  guardarDatosMostrar(event: Event) {
    event.preventDefault();
    if (this.formCerNoAdeEmprNoReg.valid) {
      const value = this.formCerNoAdeEmprNoReg.value;
      console.log(value);
    } else {
      this.formCerNoAdeEmprNoReg.markAllAsTouched();
    }
  }
  //geters
  get TipoIdentificaciónValido() {
    return (
      this.formCerNoAdeEmprNoReg.get("TipoIdentificación")?.touched &&
      this.formCerNoAdeEmprNoReg.get("TipoIdentificación")?.valid
    );
  }
  get NrodeIdentificaciónValido() {
    return (
      this.formCerNoAdeEmprNoReg.get("NrodeIdentificación")?.touched &&
      this.formCerNoAdeEmprNoReg.get("NrodeIdentificación")?.valid
    );
  }
  get DepartamentoRegionalValido() {
    return (
      this.formCerNoAdeEmprNoReg.get("DepartamentoRegional")?.touched &&
      this.formCerNoAdeEmprNoReg.get("DepartamentoRegional")?.valid
    );
  }
  get RazónSocialValido() {
    return (
      this.formCerNoAdeEmprNoReg.get("RazónSocial")?.touched &&
      this.formCerNoAdeEmprNoReg.get("RazónSocial")?.valid
    );
  }
  get RepresentanteLegalValido() {
    return (
      this.formCerNoAdeEmprNoReg.get("RepresentanteLegal")?.touched &&
      this.formCerNoAdeEmprNoReg.get("RepresentanteLegal")?.valid
    );
  }

  get TipoIdentificaciónInvalido() {
    return (
      this.formCerNoAdeEmprNoReg.get("TipoIdentificación")?.touched &&
      this.formCerNoAdeEmprNoReg.get("TipoIdentificación")?.invalid
    );
  }
  get NrodeIdentificaciónInvalido() {
    return (
      this.formCerNoAdeEmprNoReg.get("NrodeIdentificación")?.touched &&
      this.formCerNoAdeEmprNoReg.get("NrodeIdentificación")?.invalid
    );
  }
  get DepartamentoRegionalInvalido() {
    return (
      this.formCerNoAdeEmprNoReg.get("DepartamentoRegional")?.touched &&
      this.formCerNoAdeEmprNoReg.get("DepartamentoRegional")?.invalid
    );
  }
  get RazónSocialInvalido() {
    return (
      this.formCerNoAdeEmprNoReg.get("RazónSocial")?.touched &&
      this.formCerNoAdeEmprNoReg.get("RazónSocial")?.invalid
    );
  }
  get RepresentanteLegalInvalido() {
    return (
      this.formCerNoAdeEmprNoReg.get("RepresentanteLegal")?.touched &&
      this.formCerNoAdeEmprNoReg.get("RepresentanteLegal")?.invalid
    );
  }
}
