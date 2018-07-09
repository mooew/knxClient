export class EtsModel {
  addresses: Address[];
}

export class Address {
  name = '';
  ga   = '';
}

export const ets: EtsModel[] = [
  {
    addresses: [
      {name: 'name 1',  ga: '0/0/1'},
      {name: 'name 2', ga: '0/0/2'},
      {name: 'name 3',  ga: '0/0/3'},
      {name: 'name 4', ga: '0/0/4'},
    ]
  }
];


export class EtsType {
  name: any;

  ga: any;

}
