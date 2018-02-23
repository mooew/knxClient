import { Component, OnInit } from '@angular/core';

import { SocketService } from '../socket.service';
import { ObservableMedia } from '@angular/flex-layout';


@Component({
  selector: 'app-hvac-input',
  templateUrl: './hvac-input.component.html',
  styleUrls: ['./hvac-input.component.css']
})
export class HvacInputComponent implements OnInit {

  model = 1;

  constructor(
    private socketService: SocketService,
  ) { }

  sendMessage(val: number, id: number) {
    this.socketService.sendHVACMessage({inp: val, id: id});
  }

  temp = 20;
  sp = 21;
  value = 'Clear me';



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

  favoriteSeason: string;

 seasons = [
   'comfort',
   'economy',
   'standby',
   'protect',
 ];

  ngOnInit() {
  }

}
