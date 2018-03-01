import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { HvacChartComponent } from '../hvac-chart/hvac-chart.component';

@Component({
  selector: 'app-hvac-chart-ops',
  templateUrl: './hvac-chart-ops.component.html',
  styleUrls: ['./hvac-chart-ops.component.css'],

})
export class HvacChartOpsComponent implements OnInit {
@Output() onClear = new EventEmitter();
  constructor() { }

  id:any = 0;
  ngOnInit() {
  }

  public clear() {
    this.id = 1;
    this.onClear.emit(this.id);
    //hvacChart.data.labels.splice(0.5)
    //this.hvacChart.data.datasets[0].data.splice(0,5)
    //this.hvacChart.data.datasets[1].data.splice(0,5)
  }
  public clearAll() {
    this.id = 2;
    this.onClear.emit(this.id);
    //hvacChart.data.labels.splice(0.5)
    //this.hvacChart.data.datasets[0].data.splice(0,5)
    //this.hvacChart.data.datasets[1].data.splice(0,5)
  }

}
