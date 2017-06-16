import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  githubObj: any = '';
  score: number = 0;
  message = [false, false, false, false, false];
  constructor(private _httpService: HttpService){}

  onSubmit(){
    this.getTasks();
  }
  getTasks(){
    this._httpService.retrieveTasks(this.username)
    .then( obj => {
      console.log(obj);
      this.githubObj = obj;
      this.score = obj.public_repos + obj.followers;
      if (this.score < 20){
        this.message = [true, false, false, false, false];
      }
      else if (this.score < 50){
        this.message = [false, true, false, false, false];
      }
      else if (this.score < 100){
        this.message = [false, false, true, false, false];
      }
      else if (this.score < 200){
        this.message = [false, false, false, true, false];
      }
      else {
        this.message = [false, false, false, false, true];
      }
    })
    .catch( err => { console.log(err); })
  }
}