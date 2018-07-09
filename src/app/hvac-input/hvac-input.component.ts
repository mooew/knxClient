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
  curOnOffMode: number;
  //curWindowState: number = 0;

  curWindowState: number = 0;
  curPresenceState: number = 0;

  modes = [
    {id: 1, text: 'comfort'},
    {id: 2, text: 'standby'},
    {id: 3, text: 'economy'},
    {id: 4, text: 'protect'},
  ];

  thermoModes = [
    {id: 0, text: 'auto'},
    {id: 1, text: 'cooling only'},
    {id: 2, text: 'heating only'},
    //{id: 3, text: 'auto'},
  ];

  onOffModes = [
    {id: 0, text: 'off'},
    {id: 1, text: 'on'},
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
          console.log("update " + data.id + ' en ' +data.inp)
          switch (data.id){
            case 0:   //new temperature
              console.log('update temp')
            break;
            case 1:   //new setpoint
              this.sp = data.inp;
              //this.temp = data.inp;;
            break;
            case 2:   //new SP mode
              this.curSpMode = data.inp;
            break;
            case 3: //new thermo mode
              this.curThMode = data.inp;
            break;
            case 4: //new onoff mode
              if(data.inp){
                this.curOnOffMode = 1;
              }else if(!data.inp){
                this.curOnOffMode = 0;
              }
              
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

  public onOnOffMode(): void{
    console.log("on/off mode: " + this.curOnOffMode);
    this.sendMessage(this.curOnOffMode, 4);
  };

  public onWindow(): void{
    this.curWindowState = 1 - this.curWindowState;
    console.log("window: " + this.curWindowState);
    this.sendMessage(this.curWindowState, 5);
  };

  public onPresence(): void{
    this.curPresenceState = 1 - this.curPresenceState;
    console.log("window: " + this.curPresenceState);
    this.sendMessage(this.curPresenceState, 6);
  };

  public clear():void {

    };


}
