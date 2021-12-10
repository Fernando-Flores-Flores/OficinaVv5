import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AseguradoComponent} from './asegurado/asegurado.component';
import {EmpleadorComponent} from './empleador/empleador.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import {FormsRegistroSIPComponent} from './forms-registro-sip/forms-registro-sip.component';
import { FormsRegistroEmpleadorComponent } from './forms-registro-empleador/forms-registro-empleador.component';
import { LoginV2Component } from './login-v2/login-v2.component';
import {GenCertComponent} from './gen-cert/gen-cert.component';
import { FRegistroSIPComponent } from './formularios/asegurados/f-registro-sip/f-registro-sip.component';
import { FooterComponent } from './footer/footer.component';
import { FailComponent } from './fail/fail.component';
import { ConsultasComponent } from './consultas/consultas/consultas.component';
import { FormPruebasComponent } from './form-pruebas/form-pruebas.component';
import { DerechohabientesComponent } from './pruebas/derechohabientes/derechohabientes.component';
import { FRegistroEmpleadorComponent } from './formularios/empleadores/f-registro-empleador/f-registro-empleador.component';
import { CtrlPeriodosNoPagadosComponent } from './consultas/asegurado/ctrl-periodos-no-pagados/ctrl-periodos-no-pagados.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FRegistroConsultoresComponent } from './formularios/empleadores/f-registro-consultores/f-registro-consultores.component';
import { ConsultasIndexComponent } from './consultas-index/consultas-index.component';
import { CertNoAdeudoEmpresaNoRegistradaComponent } from './certificados/asegurados/cert-no-adeudo-empresa-no-registrada/cert-no-adeudo-empresa-no-registrada.component';
import { VeriCodHASHcnaComponent } from './certificados/empleador/veri-cod-hashcna/veri-cod-hashcna.component';



const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'index',component: InicioComponent},
  {path:'perfil',component: LoginComponent},
  {path: 'loginV2',component: LoginV2Component },
  {path:'asegurado',component: AseguradoComponent},
  {path:'empleador',component: EmpleadorComponent},
  {path:'formsRegistroSIP',component: FormsRegistroSIPComponent },
  {path:'f-registro-SIP',component: FRegistroSIPComponent },//pasos sin validacion
  {path: 'formsRegistroEmpleador',component: FormsRegistroEmpleadorComponent},//este no da
  {path:'GenCertComponent', component: GenCertComponent},//obtiene el certificado 
  {path: "cNoAdeudoEmpresas", component: CertNoAdeudoEmpresaNoRegistradaComponent},
  {path: 'frSIP',component: FRegistroSIPComponent},//formulario con pasos sin validacion
  {path: 'footer', component: FooterComponent },//footer
  {path: 'found404', component: FailComponent },//falta
  {path: 'consultasIndex', component: ConsultasComponent},//consultas
  {path: 'pruebasFormualarios',component:FormPruebasComponent},//pruebas formularios vaidado paso 1 
  {path: 'derechohabientes',component:DerechohabientesComponent},//formulario validado 90 %
  {path: 'f-registro-empleador',component: FRegistroEmpleadorComponent},
  {path: 'c-a-ctrlPeriodosNoPagados',component:CtrlPeriodosNoPagadosComponent},
  {path: 'f-registroConsultores',component: FRegistroConsultoresComponent}, 
  {path:'allConsultasIndex',component:ConsultasIndexComponent},
  {path: 'verificacionCodHSNA',component: VeriCodHASHcnaComponent},
  {path: 'carrusel',component:CarruselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
