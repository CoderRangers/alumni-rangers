import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WsChatService {

  private _sid: string = '';

  constructor(private _socket: Socket) { }

  public get sid(): string {
    return this._sid;
  }
  public set sid(value: string) {
    this._sid = value;
  }

  connect(): void {
    this._socket.connect((error: any) => {
      console.error(`Something went wrong while connecting to socket : ${error}`);
    })
  }

  disconnect(): void {
    this._socket.disconnect();
  }

  receiveIdentity(): Observable<any> {
    return this._socket.fromEvent('identity')
  }

  sendIdentity(message: any): Observable<any> {
    return this._socket.emit('userId:Identity', message)
  }
}
