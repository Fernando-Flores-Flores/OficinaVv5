import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-consultas-index',
  templateUrl: './consultas-index.component.html',
  styleUrls: ['./consultas-index.component.css']
})
export class ConsultasIndexComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  redirigir(layout: string) {
    this.router.navigate([layout]);
  }

}
