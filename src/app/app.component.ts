import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  tasks = [];
  constructor(private _httpService: HttpService){}
  getTasks(){
    this._httpService.retrieveTasks()
    .then( tasks => { this.tasks = tasks })
    .catch( err => { console.log(err); })
  }
}