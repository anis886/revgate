import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-baic',
  imports: [RouterLink,CommonModule],
  templateUrl: './baic.html',
  styleUrl: './baic.css',
})
export class Baic {

categories = ['Off-road', 'SUV', 'Sedan', 'EV'];

  cars = [
    {
      name: 'BJ30',
      small: 'assets/assetsbj30.png',
      big: 'assets/assetsbj30.png',
      category: 'Off-road'
    },
    {
      name: 'BJ80',
      small: 'assets/assetsbj80.png',
      big: 'assets/assetsbj80.png',
      category: 'Off-road'
    },
    {
      name: 'BJ60',
      small: 'assets/assetsbj60.png',
      big: 'assets/assetsbj60.png',
      category: 'Off-road'
    },
    {
      name: 'BJ40 Plus',
      small: 'assets/assetsbj40plus.png',
      big: 'assets/assetsbj40plus.png',
      category: 'Off-road'
    },
    {
      name: 'ALL NEW X7',
      small: 'assets/assetsbj60.png',
      big: 'assets/assetsbj60.png',
      category: 'SUV'
    },
    {
      name: 'X55 II',
      small: 'assets/assetsbj40plus.png',
      big: 'assets/assetsbj40plus.png',
      category: 'SUV'
    },
    {
      name: 'U5 Plus',
      small: 'assets/assetsu5plus.png',
      big: 'assets/assetsu5plus.png',
      category: 'Sedan'
    },
    {
      name: 'EU5',
      small: 'assets/assetseu5.png',
      big: 'assets/assetseu5.png',
      category: 'EV'
    }
  ];

  selectedCategory: string = this.categories[0];
  selectedCar = this.getFilteredCars()[0];

  setCategory(category: string): void {
    this.selectedCategory = category;
    this.selectedCar = this.getFilteredCars()[0];
    setTimeout(() => {
    this.selectedCar = this.selectedCar;
  }, 0);
  }

  selectCar(car: any): void {
    this.selectedCar = car;
  }

  getFilteredCars() {
    return this.cars.filter(car => car.category === this.selectedCategory);
  }
  
}

