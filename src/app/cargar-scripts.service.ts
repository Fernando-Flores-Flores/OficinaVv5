import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }
  cargar(archivos:string[]){
    for(let archivo of archivos){
        let script = document.createElement("script");
        script.src="../assets/js/"+archivo+".js"
        let div = document.getElementsByTagName("div")[0];
        div.appendChild(script);
    }
  }
}
