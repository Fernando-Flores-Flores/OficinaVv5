import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { AseguradoComponent } from './asegurado/asegurado.component';
import { EmpleadorComponent } from './empleador/empleador.component';
import { LoginComponent } from './login/login.component';
import { FormsRegistroSIPComponent } from './forms-registro-sip/forms-registro-sip.component';
import { NavbarEmpleadorComponent } from './navbar-empleador/navbar-empleador.component';
import { FormsRegistroEmpleadorComponent } from './forms-registro-empleador/forms-registro-empleador.component';
import { LoginV2Component } from './login-v2/login-v2.component';
import { GenCertComponent } from './gen-cert/gen-cert.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { FRegistroSIPComponent } from './formularios/asegurados/f-registro-sip/f-registro-sip.component';
import { FooterComponent } from './footer/footer.component';
import { FailComponent } from './fail/fail.component';
import { ConsultasComponent } from './consultas/consultas/consultas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPruebasComponent } from './form-pruebas/form-pruebas.component';
import { DerechohabientesComponent } from './pruebas/derechohabientes/derechohabientes.component';
import { FRegistroEmpleadorComponent } from './formularios/empleadores/f-registro-empleador/f-registro-empleador.component';
import { FRegistroConsultoresComponent } from './formularios/empleadores/f-registro-consultores/f-registro-consultores.component';
import { CtrlPeriodosNoPagadosComponent } from './consultas/asegurado/ctrl-periodos-no-pagados/ctrl-periodos-no-pagados.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ConsultasIndexComponent } from './consultas-index/consultas-index.component';
import { CertNoAdeudoEmpresaNoRegistradaComponent } from './certificados/asegurados/cert-no-adeudo-empresa-no-registrada/cert-no-adeudo-empresa-no-registrada.component';
import { VeriCodHASHcnaComponent } from './certificados/empleador/veri-cod-hashcna/veri-cod-hashcna.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AseguradoComponent,
    EmpleadorComponent,
    LoginComponent,
    FormsRegistroSIPComponent,
    NavbarEmpleadorComponent,
    FormsRegistroEmpleadorComponent,
    LoginV2Component,
    GenCertComponent,
    PerfilUsuarioComponent,
    FRegistroSIPComponent,
    FooterComponent,
    FailComponent,
    ConsultasComponent,
    FormPruebasComponent,
    DerechohabientesComponent,
    FRegistroEmpleadorComponent,
    FRegistroConsultoresComponent,
    CtrlPeriodosNoPagadosComponent,
    CarruselComponent,
    ConsultasIndexComponent,
    CertNoAdeudoEmpresaNoRegistradaComponent,
    VeriCodHASHcnaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
