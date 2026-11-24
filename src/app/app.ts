import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  counter:number = 0;

  // handleAdd() {
  //   this.counter++;
  // }
  // handleSubtract() {
  //   if(this.counter!=0)
  //   this.counter--;
  // } 
  // handleReset() {
  //   this.counter = 0;
  // } 
    handle(value:string){
      if(value === 'plus'){
        this.counter++;
      }
      if(value === 'minus'){
        if(this.counter !== 0){
          this.counter--;
        }
      }
      if(value === 'reset'){
        this.counter = 0;
      }
    }


}