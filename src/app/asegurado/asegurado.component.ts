import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-asegurado',
  templateUrl: './asegurado.component.html',
  styleUrls: ['./asegurado.component.css']
})
export class AseguradoComponent implements OnInit {
  tipo:string="Asegurado";
  constructor() { }

  ngOnInit(): void {
  }
  photosCarrusel: Array<any> = [{
    img: "../../assets/carrusel/imgbaner1.jpg",
    texto1:"",
    texto2:""

  },
  {
    img: "../../assets/carrusel/imgbaner2.jpg",
    texto1:"",
    texto2:""

  },
  {
    img: "../../assets/carrusel/imgbaner3.jpg",
    texto1:"",
    texto2:""

  },
];
}
