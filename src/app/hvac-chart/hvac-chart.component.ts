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
        this.graphData.datasets[2].data = this.dataPoints.map(dataPoint => dataPoint.pi_heat);
        this.graphData.datasets[3].data = this.dataPoints.map(dataPoint => dataPoint.pi_cool);
        //this.graphData.datasets[4].data = this.dataPoints.map(dataPoint => dataPoint.pi_heat_2);
        //this.graphData.datasets[5].data = this.dataPoints.map(dataPoint => dataPoint.pi_cool_2);
        this.graphData.datasets[4].data = this.dataPoints.map(dataPoint => dataPoint.heat_act);
        this.graphData.datasets[5].data = this.dataPoints.map(dataPoint => dataPoint.cool_act);
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
    this.graphData.labels.push(data.time)
    this.graphData.datasets[0].data.push(data.temp)
    this.graphData.datasets[1].data.push(data.sp)
    this.graphData.datasets[2].data.push(data.pi_heat)
    this.graphData.datasets[3].data.push(data.pi_cool)
    this.graphData.datasets[4].data.push(data.heat_act)
    this.graphData.datasets[5].data.push(data.cool_act)
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

      public onClear(id):void{

        switch(id){
          case 1:
            this.graphData.labels.splice(0,5);
            this.graphData.datasets[0].data.splice(0,5);
            this.graphData.datasets[1].data.splice(0,5);
            this.graphData.datasets[2].data.splice(0,5);
            this.graphData.datasets[3].data.splice(0,5);
            this.graphData.datasets[4].data.splice(0,5);
            this.graphData.datasets[5].data.splice(0,5);

            this.hvacChart.update();
          break;
          case 2:
            alert("data is cleared after refresh");
            this.socketService.sendHVACMessage({inp: null, id: 10});
          break;

        }

      }

}
