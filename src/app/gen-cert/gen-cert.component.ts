import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gen-cert",
  templateUrl: "./gen-cert.component.html",
  styleUrls: ["./gen-cert.component.css"],
})
export class GenCertComponent implements OnInit {
  constructor() {    
  }

  ngOnInit(): void {}
  titulos: string[];
  getMensaje(e:any){
    console.log(e);
  }

titulo(e:any){
  switch(e.miarray.tit) { 
    case "c1": { 
        
       break; 
    } 
    case 1: { 
       //statements; 
       break; 
    } 
    default: { 
       //statements; 
       break; 
    } 
 } 
  return "dsfsd";
}


  titulosMenuMetodos: Array<any> = [
    {
    idC:"c1",
    tit:"certificado de registro de asegurado  ",
    sub:"certificado de  ",
    contenido:"certificado de dfsfdsfdsfdsfdsf  ",
  },
  {
    idC:"c2",
    tit:"Certificado registro de asegurado",
    sub:"certificado de  ",
    contenido:"certificado de sddddddddddddddddddddddddd ",
  },
  {
    idC:"c3",
    tit:"Certificado de no registro",
    sub:"certificado de  ",
    contenido:"certificado de  ssssssssssssssssssssssssss ",
  },
  {
    idC:"c4",
    tit:"Certificado de vivencia",
    sub:"certificado de  ",
    contenido:"certificado deaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  ",
  }
  ];
}
