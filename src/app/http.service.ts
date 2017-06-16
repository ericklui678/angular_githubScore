// injecting the Http Moduel in the Service
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  
  constructor(private _http: Http) { }
  retrieveTasks(username) {
    let url = 'https://api.github.com/users/' + username;
    return this._http.get(url).map(data=>data.json()).toPromise()
  }
}