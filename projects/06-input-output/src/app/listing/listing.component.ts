import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'listingTemplate.html',
  styles: ``,
})
export class ListingComponent {
  @Input({
    required: true
  }) car!: Car;

  @Output() savedCar = new EventEmitter<Car>();

  handleSaveCar() {
    this.savedCar.emit(this.car)
  }
}
