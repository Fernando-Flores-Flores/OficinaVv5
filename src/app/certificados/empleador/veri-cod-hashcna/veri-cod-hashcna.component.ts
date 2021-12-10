import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-veri-cod-hashcna",
  templateUrl: "./veri-cod-hashcna.component.html",
  styleUrls: ["./veri-cod-hashcna.component.css"],
})
export class VeriCodHASHcnaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  entidades: Array<any> = [
    {
      value: "1",
      entidad: "Banco Fortaleza",
    },
    {
      value: "2",
      entidad: "Banco Unión",
    },
    {
      value: "3",
      entidad: "Banco Mercantil Santa Cruz",
    },
    {
      value: "4",
      entidad: "Banco Ganadero",
    },
    {
      value: "5",
      entidad: "Banco FIE",
    },
    {
      value: "6",
      entidad: "Banco Facil",
    },
  ];
}
