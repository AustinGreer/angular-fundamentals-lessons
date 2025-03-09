import { Component } from '@angular/core';
import { Car } from './car';
import { ListingComponent } from './listing/listing.component';

/**
 * 
 * Property binding in Angular enables you to set values for properties of elements in your templates. This allows dynamic values
 * <button type="button" [disabled]="isDisabled">Save</button>
 * 
 * Event binding in Angular enables you to respond to events in the template
 * <button type="buton" (click)="handleClick()">Save</button>
 * 
 * Inputs in Angular is just like props. So you can use them to pass data between templates.
 * @component({
 *  // other declarative stuff
 *  template: `app-user-card [userData]="user"/>`
 * 
 *  export class AppComponent {
 *  user = {name: "name", value: "value"}
 * }
 * })
 * 
 * Inputs allow us to send information into the component. Outputs allows us to send information out. Both are about communication
 * 
 */
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Saved Cars {{ savedCarList.length }}</h1>
    <section class="container">
      @for(car of carList; track car) {
        <app-listing [car]="car" (savedCar)="handleSaveCar($event)"></app-listing>
      }
    </section>
  `,
  styles: [],
  imports: [ListingComponent],
})
export class AppComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];

  handleSaveCar(car: Car) {
    this.savedCarList.push(car);
  }
}
