import { Component } from '@angular/core';
// Use tilde (`) key to create more than one element in template
// *ngFor:  renders a template for each item in a collection

@Component({  // configs
  selector: 'app-root',
  template:
  `
  <h1>HELLO WORLD!</h1>
  <p>{{myObject.location}}</p>
  <ul>
      <li *ngFor="let elem of arr">{{elem}}</li>
  </ul>
  <p *ngIf="arr">Yeah, this is a list!</p>
  <p *ngIf="!arr; else otherVar">Something went wrong... Try again!</p>
  <ng-template #otherVar>First Angular Template</ng-template>
  <br><br>
  <div *ngIf="arr; then var1 else var2"></div>
  <ng-template #var1>
    I love Angular!
  </ng-template>
  <ng-template #var2>
    I actually prefer React...
  </ng-template>
  <img src="{{angularLogo}}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">
  <br><br>
  <button [disabled]="buttonStatus">CLICK ME!</button>
  <br><br>
  <button [disabled]="isClickable != 'true'">Try again...</button>
  <br><br>
  <button (click)="theClick($event)">For Events</button>
  <br><br>
  <button (mouseenter)="onClick($event)">Hover over Me!</button>
  <h2 [ngClass]="titleClasses">Styling is fun!</h2>
  `,
  styles: [ // css stylesheets configured here
      `h1 {
          text-decoration: underline;
      }

      .red-title {
         color: #FF0000
      }

      .large-title {
         font-size: 4em
      }
      `
  ]
})
export class AppComponent {
    myObject = {
        gender: "Male",
        age: 33,
        location: 'USA'
    }
    arr = ["Llewellyn","John","Shené"]
    angularLogo = '../assets/shield-large.svg'
    buttonStatus = true
    isClickable = "true"

    theClick(event) {
        alert(`You just missed the event: ${event}`);
        console.log(event);
    }
    onClick(event) {
      console.log(event);
    }

    titleClass = false
    titleClasses = {
        'red-title': true,
        'large-title': true
    }
}
