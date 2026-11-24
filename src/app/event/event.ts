import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event',
  styleUrl: './event.css',
  templateUrl: './event.html',
})
export class Event {
  count = signal(0);  
  increment() {
    this.count.update((c) => c + 1);
  }     
  showEvent(e: any) {
    console.log(e);
  } 
  username='';
  updateUsername(value:string){
    this.username=value;
  }
  handleSubmit(e: any) {
    e.preventDefault();
    console.log('Form submitted!');
  }
}
