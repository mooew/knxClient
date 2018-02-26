import { Component, OnInit } from '@angular/core';

import { Ets } from '../ets';

@Component({
  selector: 'app-ets',
  templateUrl: './ets.component.html',
  styleUrls: ['./ets.component.css']
})
export class EtsComponent   {

  constructor() { }

  powers = ['Really Smart', 'Super Flexible',
              'Super Hot', 'Weather Changer'];

  model = new Ets(1, '1/0/0', '1/0/1', '1/0/8');
  submitted = false;
//  forms = [ga_1, ga_2, ga_3];

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


  public test():void {
    console.log(this.model)
    //hvacChart.data.labels.splice(0.5)
    //this.hvacChart.data.datasets[0].data.splice(0,5)
    //this.hvacChart.data.datasets[1].data.splice(0,5)
  }

}
