import { Component } from '@angular/core';
// Use tilde (`) key to create more than one element in template
// *ngFor:  renders a template for each item in a collection

@Component({  // configs
  selector: 'app-root',
  template:
  `<h1>HELLO WORLD!</h1>
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
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    myObject = {
        gender: "Male",
        age: 33,
        location: 'USA'
    }
    arr = ["Llewellyn","John","Shené"]
}
