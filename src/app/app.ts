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
  name="Angular tutorial";
  username="GP";
  isAdmin=true;
  count=3;
  getUser(){
    return "Virat Kohli";
  }
  title=signal("Angular tutorial");
}
