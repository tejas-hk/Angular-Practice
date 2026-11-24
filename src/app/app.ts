import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signin } from './login/signin/signin';
import { Event } from './event/event';

@Component({
  imports: [Login, Signin, Event],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name = 'Mohit';

  handleClick() {
    let abc="abcd";
    console.log('Button clicked!',abc);
    //this.helloWorld();
  }
  helloWorld() {
    console.log('Hello World!');   
  }
  handleInput(event: any) {
    console.log('Input event:', event);
  }
  onKeyUp(event: any) {
    console.log('KeyUp event:', event.key);
  }
  onHover() {
    console.log('Mouse hover event!');
  }
  onLeave() {
    console.log('Mouse leave event!');
  }
  onBlur() {
    console.log('Input blur event!');
  }
  onFocus() {
    console.log('Input focus event!');
  }
}
