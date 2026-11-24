import {Component, signal} from '@angular/core';

@Component({    
    selector: 'app-signin', 
    template:`<h2>Signin works!</h2>`,
    styles:[`h2{color:blue}`]
})

export class Signin {
    title = signal("Signin works!");
}