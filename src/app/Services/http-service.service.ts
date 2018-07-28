import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private HttpService:HttpClient) { }

  url='assets/Fard.json';
  GetListFard() :Observable<object> {
    return this.HttpService.get(this.url)
  }
}
