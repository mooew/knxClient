import { Component, OnInit } from '@angular/core';

import { Chart, pattern } from 'chart.js';
import * as moment from 'moment';

import { DataService } from '../data.service';
import { SocketService } from '../socket.service';
import { DataPoint } from '../hero';

import * as graph from '../graph';

@Component({
  selector: 'app-hvac-chart',
  templateUrl: './hvac-chart.component.html',
  styleUrls: ['./hvac-chart.component.css']
})
export class HvacChartComponent implements OnInit {

  dataPoints: DataPoint[];

    graphData: any = graph.graphData;
    graphOptions: any = graph.graphOptions;

    hvacChart = undefined;
    cnt:any = 1;

  constructor(
    private dataService: DataService,
    private socketService: SocketService,
  ) { }

  getData(): void {
    this.dataService.getData()
      .subscribe(data => {
        this.dataPoints = data;
        this.graphData.labels = this.dataPoints.map(dataPoint => dataPoint.time);
        this.graphData.datasets[0].data = this.dataPoints.map(dataPoint => dataPoint.temp);
        this.graphData.datasets[1].data = this.dataPoints.map(dataPoint => dataPoint.sp);
        this.hvacChart.update();
      });
  }

  getDataPoint(): void {
    this.socketService.getMessage()
      .subscribe(data => {
        this.updateCharts(data)
      });
  }

  ngOnInit() {
    this.getData();         //through http
    this.getDataPoint();    //through socket



    const ctx = document.getElementById('myChart');

    this.hvacChart = new Chart(ctx, {
      type: 'line',
      data: this.graphData,
      options: this.graphOptions
    });

    //this.socket.on('new-graph-data', (data) => this.updateCharts(data));

  }
//-------------------------------------------------------------------

  updateCharts(data) {
    console.log(data);
    this.graphData.labels.push(moment())
    this.graphData.datasets[0].data.push(data.temp)
    this.graphData.datasets[1].data.push(data.sp)
    this.hvacChart.update();
  }



      public randomize():void {
        //today: string = ;
        console.log(moment());
        /*
        this.data.push({
          x: moment().add(15 + this.cnt, 'minutes'),
          y:5
        })
        */
        this.hvacChart.data.labels.push(moment().add(15 + this.cnt, 'minutes'))
        this.hvacChart.data.datasets[0].data.push(10)
        this.cnt ++;
        this.hvacChart.update();
      }

}
