import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { SocketService } from '../socket.service';
import { ObservableMedia } from '@angular/flex-layout';
import {FormControl, Validators} from '@angular/forms';
//import { HvacChartComponent } from '../hvac-chart/hvac-chart.component';
//import * as hvacChart from '../hvac-chart/hvac-chart.component';


@Component({
  selector: 'app-hvac-input',
  templateUrl: './hvac-input.component.html',
  styleUrls: ['./hvac-input.component.css']
})
export class HvacInputComponent implements OnInit {
@Output() onClear = new EventEmitter();

  model = 1;

  constructor(
    private socketService: SocketService,
  ) { }

  sendMessage(val: number, id: number) {
    this.socketService.sendHVACMessage({inp: val, id: id});
  }

  temp = 20;
  sp = 21;
  curSpMode: number;
  curThMode: number;

  modes = [
    {id: 1, text: 'comfort'},
    {id: 2, text: 'standby'},
    {id: 3, text: 'economy'},
    {id: 4, text: 'protect'},
  ];

  thermoModes = [
    {id: 0, text: 'off'},
    {id: 1, text: 'heating'},
    {id: 2, text: 'cooling'},
    {id: 3, text: 'auto'},
  ];



  addTemp(newTemp: any) {
    if (newTemp) {
      this.temp = newTemp;
      this.sendMessage(this.temp, 0);
    }
  }
  addSP(newSP: any) {
    if (newSP !== 0) {
      this.sp = newSP;
      this.sendMessage(this.sp, 1);
    }
  }

    getUpdateDOM(): void {
      this.socketService.getUpdateDOM()
        .subscribe(data => {
          //do something with the data
          switch (data.id){
            case 0:   //new temperature
            break;
            case 1:   //new setpoint
              this.sp = data.inp;
            break;
            case 2:   //new SP mode

            break;
            case 3: //new thermo mode
              this.curSpMode = data.inp;
            break;
            };
        });
    }


  ngOnInit() {
    this.getUpdateDOM();    //through socket
  }

  public onSpMode(): void{
    console.log("sp mode: " + this.curSpMode);
    this.sendMessage(this.curSpMode, 2);
  };

  public onThMode(): void{
    console.log("th mode: " + this.curThMode);
    this.sendMessage(this.curThMode, 3);
  };
  public clear():void {

    };


}
