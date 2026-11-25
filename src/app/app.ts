import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  isLoggedIn=true;
  showBox=true;
  age:number = null!;
  status:string = "processing";
  section='home';
  toggleBox() { 
    this.showBox = !this.showBox;
  }
  updateAge(event: string) {
    this.age=Number(event);
}}