import { Injectable } from '@angular/core';
import { IUserDetails } from '../Interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
  
  Objects:IUserDetails[]

  DataList(){
    this.Objects= [
      {
          Id: "1",
          Name: "Mohammad",
          Family: "Hajian"
      }, {
          Id: "2",
          Name: "Mahdi",
          Family: "Hajian"
      }, {
          Id: "3",
          Name: "javad",
          Family: "Hajian"
      }
  ]
  return this.Objects;
  }

  constructor() { }
}
