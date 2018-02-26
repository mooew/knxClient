import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { DataPoint } from './hero';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocketService {

  private url = 'http://localhost:9000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }
////////////send////////////

  public sendHVACMessage(data) {
        this.socket.emit('hvac-data', data);
  }

////////////reseive////////////

  public getMessage = () => {
        return Observable.create((observer) => {
            this.socket.on('new-graph-data', (message) => {
                observer.next(message);
            });
        });
  }

  public getUpdateDOM = () => {
        return Observable.create((observer) => {
            this.socket.on('updateInpDOM', (message) => {
                observer.next(message);
            });
        });
  }

}
