import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: ['']
})
export class GraficoDonaComponent implements OnInit {
  // Doughnut : Graficas
  @Input() Labels: string[] = [];
  @Input() Data: number[] = [];
  @Input() Type: string = '';


  constructor() { }

  ngOnInit() {
  }

}
