import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate } from '@angular/animations';

// Use tilde (`) key to create more than one element in template
// *ngFor:  renders a template for each item in a collection

@Component({  // configs
  selector: 'app-root',
  template:
  `
  <h1>HELLO WORLD!</h1>
  <h3 [@aNimation]='state' (click)="animated()">AnGuLaR</h3>
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
  <p>{{someProp}}</p>
  `,
  styles: [ // css stylesheets configured here
      `h1 {
          text-decoration: underline;
      }

      .red-title {
         color: #FF0000
      }

      h3 {
          width: 300px;
          background: lightgray;
          margin: 10px auto;
          margin-left: 100px;
          text-align: center;
          paddding : 20px;
          font-size: 2rem;
          background-size: 300px 100px;
      }

      .large-title {
         font-size: 4em
      }
      `
  ],
  animations: [
      trigger('aNimation',[
          state('small',style({
              transform: 'scale(1)',
          })),
          state('large',style({
            transform: 'scale(1.2)',
        })),
        // <=> indicates that animation will transition smoothly in and out
        transition('small <=> large',animate('300ms ease-in', style({
            transform: 'translateY(40px)'
        })))
      ]),
  ]
})
export class AppComponent {

    state:string = '';
    someProp:string = '';

    constructor(private dataservice:DataService) {

    }


    ngOnInit() { // runs when component loads
        console.log(this.dataservice.cars)
        this.someProp = this.dataservice.myData()
    }

    animated() {
        this.state = (this.state === 'small' ? 'large' : 'small' );
    }

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
