import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ctrl-periodos-no-pagados',
  templateUrl: './ctrl-periodos-no-pagados.component.html',
  styleUrls: ['./ctrl-periodos-no-pagados.component.css']
})
export class CtrlPeriodosNoPagadosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirigir(layout: string) {
    this.router.navigate([layout]);
  }


}
