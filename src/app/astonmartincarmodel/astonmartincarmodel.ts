import { Component } from '@angular/core';
import { CarFilterListComponent, Car } from '../shared/car-filter-list/car-filter-list';

@Component({
  selector: 'app-astonmartincarmodel',
  standalone: true,
  imports: [CarFilterListComponent],
  templateUrl: './astonmartincarmodel.html',
  styleUrl: './astonmartincarmodel.css',
})
export class Astonmartincarmodel {
  cars: Car[] = [
    {
      name: 'Aston Martin Vantage Coupe',
      image: 'assets/assetsvantage.png',
      power: 656,
      acceleration: '3.4 s',
      topSpeed: 325,
      fuel: 'Petrol',
      bodyType: 'Coupe',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'United Kingdom',
      brand: 'Aston Martin',
      year: 2025,
      price: 191000,
      horsepower: 656
    },
    {
      name: 'Aston Martin DB12 Coupe',
      image: 'assets/assetsdb12.png',
      power: 671,
      acceleration: '3.5 s',
      topSpeed: 325,
      fuel: 'Petrol',
      bodyType: 'Coupe',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'United Kingdom',
      brand: 'Aston Martin',
      year: 2025,
      price: 248000,
      horsepower: 671
    },
    {
      name: 'Aston Martin DB12 Volante',
      image: 'assets/assetsdb12Volante.png',
      power: 671,
      acceleration: '3.6 s',
      topSpeed: 325,
      fuel: 'Petrol',
      bodyType: 'Convertible',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'United Kingdom',
      brand: 'Aston Martin',
      year: 2025,
      price: 265000,
      horsepower: 671
    },
    {
      name: 'Aston Martin DBS Coupe',
      image: 'assets/vanquish.png',
      power: 715,
      acceleration: '3.4 s',
      topSpeed: 340,
      fuel: 'Petrol',
      bodyType: 'Coupe',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'United Kingdom',
      brand: 'Aston Martin',
      year: 2024,
      price: 333000,
      horsepower: 715
    },
    {
      name: 'Aston Martin DBX707',
      image: 'assets/assetsdbx707.png',
      power: 697,
      acceleration: '3.1 s',
      topSpeed: 310,
      fuel: 'Petrol',
      bodyType: 'SUV',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'United Kingdom',
      brand: 'Aston Martin',
      year: 2025,
      price: 245000,
      horsepower: 697
    },
    {
      name: 'Aston Martin Valhalla',
      image: 'assets/assetsvalhalla.jpg',
      power: 998,
      acceleration: '2.5 s',
      topSpeed: 350,
      fuel: 'Hybrid',
      bodyType: 'Hypercar',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'United Kingdom',
      brand: 'Aston Martin',
      year: 2026,
      price: 800000,
      horsepower: 998
    }
  ];
}
