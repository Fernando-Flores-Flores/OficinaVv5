import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  titulo: string = "Gestora Publica";
  @ViewChild("valor", { static: false }) valor: ElementRef;
  ngOnInit(): void {}

  irFRSIP() {
    this.router.navigate(["formsRegistroSIP"]);
  }
  redirigir(layout: string) {
    this.router.navigate([layout]);
  }

  @Output() miEvento = new EventEmitter<Array<any>>();
  ejecutarEvento() {
    this.miEvento.emit(this.titulosMenuMetodos);
  }

  titulosMenuMetodos: Array<any> = [
    {
      tit: "CERTIFICACIONES",
      img: "../../assets/logos/LogoCertificacion.png",
      miarray: [
        {
          nomSub: "Registro de relación laboral (Ultima)",
          met: "formsRegistroSIP",
          id: "c1",
          icon: "",
          tit: "certificado de  ",
        },
        {
          nomSub: "Certificado de no Adeudo Empresa no Registradas",
          met: "cNoAdeudoEmpresas",
          id: "c2",
          icon: "",
          tit: "Certificado registro de asegurado",
        },
        {
          nomSub: "Verificación de código HASH-CNA ",
          met: "verificacionCodHSNA",
          id: "c3",
          icon: "",
          tit: "Certificado de no registro",
        },
        {
          nomSub: "Certificado de Vivencia",
          met: "cNoAdeudoEmpresas",
          id: "c4",
          icon: "",
          tit: "Certificado de vivencia",
        },
      ],
    },
    {
      tit: "CONSULTAS",
      img: "../../assets/logos/LogoConsultas.png",
      miarray: [
        {
          nomSub: "Periodos no pagados",
          met: "c-a-ctrlPeriodosNoPagados",
          id: "ase",
          icon: "",
        },
        {
          nomSub: "Todas las consultas",
          met: "allConsultasIndex",
          id: "ase",
          icon: "",
        },
        {
          nomSub: "Certificado de no Registro ",
          met: "consultasIndex",
          id: "",
          icon: "",
        },
        {
          nomSub: "Certificado de Vivencia",
          met: "consultasIndex",
          id: "",
          icon: "",
        },
      ],
    },
    {
      tit: "FORMULARIOS",
      img: "../../assets/logos/LogoFormulario.png",
      miarray: [
        {
          nomSub: "Prueba",
          met: "formsRegistroEmpleador",
          id: "",
          icon: "",
        },
        {
          nomSub: "Registro al SIP con pasos",
          met: "frSIP",
          id: "",
          icon: "",
        },
        {
          nomSub: "Registro al SIP Validado",
          met: "derechohabientes",
          id: "",
          icon: "",
        },
        {
          nomSub: "Registro al SIP empleadores",
          met: "f-registro-empleador",
          id: "",
          icon: "",
        },
        {
          nomSub: "Registro consultores",
          met: "f-registroConsultores",
          id: "c4",
          icon: "",
        },
        {
          nomSub: "",
          met: "found404",
          id: "",
          icon: "",
        },
        {
          nomSub: "",
          met: "found404",
          id: "",
          icon: "",
        },
        {
          nomSub: "",
          met: "found404",
          id: "",
          icon: "",
        },
        {
          nomSub: "",
          met: "found404",
          id: "",
          icon: "",
        },
        {
          nomSub: "",
          met: "found404",
          id: "",
          icon: "",
        },
        {
          nomSub: "",
          met: "f-registro-SIP",
          id: "",
          icon: "",
        },
        {
          nomSub: "",
          met: "found404",
          id: "",
          icon: "",
        },
        {
          nomSub: "",
          met: "found404",
          id: "",
          icon: "",
        },
        {
          nomSub: "",
          met: "found404",
          id: "",
          icon: "",
        } /* ,
        {
          nomSub: "Formulario de registro de consultores",
          met: "found404",
          id: "",
          icon: "",
        },
        {
          nomSub:
            "Formulario de solicitud de certificación de no registro y no deuda para empresas extranjeras no constituidas en el estado plurinacional de bolivia",
          met: "found404",
          id: "",
          icon: "",
        },
        {
          nomSub: "Formulario de  conformidad de aportes",
          met: "found404",
          id: "",
          icon: "",
        },
        {
          nomSub: "Estado de ahorro previsional semestral e histórico",
          met: "found404",
          id: "",
          icon: "",
        }, */,
      ],
    },
    {
      tit: "SOLICITUDES",
      img: "../../assets/logos/LogoConsultas.png",
      miarray: [
        {
          nomSub: "Solicita de gestor para tu empresa",
          met: "solGesEmpresa",
          id: "ase",
          icon: "",
        },
        {
          nomSub: "Todas las consultas",
          met: "allConsultasIndex",
          id: "ase",
          icon: "",
        },
        {
          nomSub: "Certificado de no Registro ",
          met: "consultasIndex",
          id: "",
          icon: "",
        },
        {
          nomSub: "Certificado de Vivencia",
          met: "consultasIndex",
          id: "",
          icon: "",
        },
      ],
    },
    {
      tit: "PAGO DE APORTES",
      img: "../../assets/logos/LogoPagos.png",
      miarray: [
        {
          nomSub: "Perfil",
          met: "perfil",
          id: "ase",
          icon: "",
        },
        {
          nomSub: "Todas las consultas",
          met: "allConsultasIndex",
          id: "ase",
          icon: "",
        },
        {
          nomSub: "Certificado de no Registro ",
          met: "consultasIndex",
          id: "",
          icon: "",
        },
        {
          nomSub: "Certificado de Vivencia",
          met: "consultasIndex",
          id: "",
          icon: "",
        },
      ],
    },
    {
      tit: "TRAMITES EN LINEA",
      img: "../../assets/logos/LogoTramites.png",
      miarray: [
        "Registro de relación laboral (Ultima)",
        "Registro Asegurado",
        "Certificado de no Registro ",
        "Certificado de Vivencia",
      ],
    },
    {
      tit: "SIMULADORES",
      img: "../../assets/logos/LogoAsegurado.png",
      miarray: [
        "Registro de relación laboral (Ultima)",
        "Registro Asegurado",
        "Certificado de no Registro ",
        "Certificado de Vivencia",
      ],
    },
  ];
/* 
  logoMenuRes = true;
  logoMenuRess = document.getElementsByClassName("sticky-top");

  mostrarLogo = () => {
    const slides = document.getElementsByClassName("sticky-top");


  }; */
}
