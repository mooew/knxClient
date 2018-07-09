import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { EtsModel , Address } from '../ets-model';

import { DataService } from '../data.service';

@Component({
  selector: 'app-ets',
  templateUrl: './ets.component.html',
  styleUrls: ['./ets.component.css']
})
export class EtsComponent   {
  etsForm: FormGroup; // <--- etsForm is of type FormGroup
  //states = states;
//  hero = hero;
  ets: any;

  constructor(
    private fb: FormBuilder,            // <--- inject FormBuilder
    private dataService: DataService

  ){
    this.createForm();
    //this.setAddresses(this.ets[0].addresses); //call for data
  }


  getEts():void{
    this.dataService.getEtsData()
      .subscribe(data => {
        console.log(data)
        this.setAddresses(data); //call for data

    });
  }

  putEts(body: any):void{
    this.dataService.putEtsData(body)
      .subscribe(data => {
        console.log(data)
        //this.setAddresses(data); //call for data
    });
  }



  createForm() {
    this.etsForm = this.fb.group({
      secretLairs: this.fb.array([]),  // <-- secretLairs as an empty FormArray

    });
  }

  setAddresses(addresses: Address[]) {
    this.ets = addresses;
  const addressFGs = addresses.map(address => this.fb.group(address));
  const addressFormArray = this.fb.array(addressFGs);
  this.etsForm.setControl('secretLairs', addressFormArray);


}
get secretLairs(): FormArray {
    return this.etsForm.get('secretLairs') as FormArray;

  };


  ngOnInit() {
    this.getEts();

  }

  onSubmit() {
    //alert('save');
  //this.ets[0].addresses = this.prepareSaveEts();
  console.log(this.ets[0]);
  this.putEts(this.prepareSaveEts());

  //this.heroService.updateEts(this.ets).subscribe(/* error handling */);
  //this.ngOnChanges();
}

prepareSaveEts() {
  const formModel = this.etsForm.value;

  // deep copy of form model lairs
  const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
    (address: Address) => Object.assign({}, address)
  );


  // return new `Hero` object containing a combination of original hero value(s)
  // and deep copies of changed form model values
  //const saveEts = {
    //id: this.ets.id,
    //name: formModel.name as string,
    // addresses: formModel.secretLairs // <-- bad!
    //addresses: secretLairsDeepCopy
//  };
  return secretLairsDeepCopy;
}

}
