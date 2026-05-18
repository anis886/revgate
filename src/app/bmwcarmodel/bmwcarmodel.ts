import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface Car {
  id: string;
  name: string;
  image: string;
  power: number;
  acceleration: string;
  topSpeed: number;
  fuel: string;
  bodyType: string;
  transmission: string;
  driveTrain: string;
  country: string;
  brand: string;
  year: number;
  price: number;
  horsepower: number;
}


@Component({
  selector: 'app-bmwcarmodel',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './bmwcarmodel.html',
  styleUrl: './bmwcarmodel.css',
})
export class Bmwcarmodel implements OnInit {
   

carId: string | null = null;
  selectedCar?: Car;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // ================= INIT =================
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.carId = params.get('id');

      if (this.carId) {
        this.selectedCar = this.cars.find(c => c.id === this.carId);
      }
    });
  }

  // ================= NAVIGATION =================
  goToCar(id: string) {
    this.router.navigate(['/main', id]);
  }
 

  // ================= DATA =================
  cars: Car[] = [
    {
      id: 'bmw3series',
      name: 'BMW 3 Series',
      image: 'assets/assetsbmw340i.png',
      power: 255,
      acceleration: '5.8 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Sedan',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 4500000,
      horsepower: 255
    },
    {
      id: 'bmw-5-series',
      name: 'BMW 5 Series',
      image: 'assets/assets5series.png',
      power: 375,
      acceleration: '4.1 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Sedan',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 6500000,
      horsepower: 375
    },
    {
      id: 'bmw-x1',
      name: 'BMW X1',
      image: 'assets/assetsx1.png',
      power: 190,
      acceleration: '8.1 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'SUV',
      transmission: 'Automatic',
      driveTrain: 'FWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 4000000,
      horsepower: 190
    },
    {
      id: 'bmw-x2',
      name: 'BMW X2',
      image: 'assets/assetsx2.png',
      power: 192,
      acceleration: '7.7 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'SUV',
      transmission: 'Automatic',
      driveTrain: 'FWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 4200000,
      horsepower: 192
    },
    {
      id: 'bmw-x3',
      name: 'BMW X3',
      image: 'assets/assetsx3.png',
      power: 375,
      acceleration: '4.1 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'SUV',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 6000000,
      horsepower: 375
    },
    {
      id: 'bmw-x5',
      name: 'BMW X5',
      image: 'assets/assetsx5.png',
      power: 375,
      acceleration: '4.1 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'SUV',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 7500000,
      horsepower: 375
    },
    {
      id: 'bmw-x5-m60i',
      name: 'BMW X5 M60i',
      image: 'assets/assetsx5m60i.png',
      power: 523,
      acceleration: '3.9 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'SUV',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 12000000,
      horsepower: 523
    },
    {
      id: 'bmw-x5-m-competition',
      name: 'BMW X5 M Competition',
      image: 'assets/assetsx5mcompetition.png',
      power: 625,
      acceleration: '3.8 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'SUV',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 15000000,
      horsepower: 625
    },
    {
      id: 'bmw-x6',
      name: 'BMW X6',
      image: 'assets/assetsx6.png',
      power: 375,
      acceleration: '4.3 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'SUV',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 8500000,
      horsepower: 375
    },
    {
      id: 'bmw-x7',
      name: 'BMW X7',
      image: 'assets/assetsX7.png',
      power: 375,
      acceleration: '5.8 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'SUV',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 10000000,
      horsepower: 375
    },
    {
      id: 'bmw-z4-m',
      name: 'BMW Z4 M',
      image: 'assets/assetsz4m.png',
      power: 387,
      acceleration: '4.0 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Convertible',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 9500000,
      horsepower: 387
    },
    {
      id: 'bmw-m5',
      name: 'BMW M5',
      image: 'assets/assetsm5.png',
      power: 600,
      acceleration: '3.3 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Sedan',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 18000000,
      horsepower: 600
    },
    {
      id: 'bmw-340i-m',
      name: 'BMW 340i M',
      image: 'assets/assetsbmw340iM.png',
      power: 375,
      acceleration: '4.2 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Sedan',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 5500000,
      horsepower: 375
    },
    {
      id: 'bmw-440i',
      name: 'BMW 440i',
      image: 'assets/assetsbmw440i.png',
      power: 374,
      acceleration: '4.1 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Coupe',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 6000000,
      horsepower: 374
    },
    {
      id: 'bmw-440i-convertible',
      name: 'BMW 440i Convertible',
      image: 'assets/assetsbmw440iconvertable.png',
      power: 374,
      acceleration: '4.3 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Convertible',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 6500000,
      horsepower: 374
    },
    {
      id: 'bmw-440i-m',
      name: 'BMW 440i M',
      image: 'assets/assetsbmw440im.png',
      power: 374,
      acceleration: '4.0 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Coupe',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2023,
      price: 7000000,
      horsepower: 374
    },
    {
      id: 'bmw-i5',
      name: 'BMW i5',
      image: 'assets/assetsbmwi5.png',
      power: 340,
      acceleration: '6.1 s',
      topSpeed: 140,
      fuel: 'Electric',
      bodyType: 'Sedan',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2024,
      price: 8000000,
      horsepower: 340
    },
    {
      id: 'bmw-im-740',
      name: 'BMW iM 740',
      image: 'assets/assetsbmwim740.png',
      power: 544,
      acceleration: '4.2 s',
      topSpeed: 140,
      fuel: 'Electric',
      bodyType: 'Sedan',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2024,
      price: 12000000,
      horsepower: 544
    },
    {
      id: 'bmw-m3',
      name: 'BMW M3',
      image: 'assets/assetsbmwm3.png',
      power: 473,
      acceleration: '4.2 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Sedan',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2024,
      price: 9000000,
      horsepower: 473
    },
    {
      id: 'bmw-m4',
      name: 'BMW M4',
      image: 'assets/assetsabmwm4.png',
      power: 473,
      acceleration: '4.1 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Coupe',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2024,
      price: 9500000,
      horsepower: 473
    },
    {
      id: 'bmw7series',
      name: 'BMW 7 Series',
      image: 'assets/assetsbmwm740.png',
      power: 530,
      acceleration: '3.6 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Sedan',
      transmission: 'Automatic',
      driveTrain: 'RWD',
      country: 'Germany',
      brand: 'BMW',
      year: 2024,
      price: 14000000,
      horsepower: 530
    }
  ];

  
  // ================= FILTER STATE =================
  filteredCars: Car[] = [...this.cars];

  
  searchText = '';

  selectedBodyTypes: string[] = [];
  selectedTransmissions: string[] = [];
  selectedDriveTrains: string[] = [];

  selectedCountry = 'all';
  selectedPrice = 'all';
  selectedBrand = 'all';
  selectedYear = 'all';
  selectedHorsepower = 'all';

  // ================= FILTER FUNCTION =================
  filterCars() {
    this.filteredCars = this.cars.filter(car => {
      this.selectedYear === 'all' || car.year === +this.selectedYear
      const searchMatch =
        this.searchText === '' ||
        car.name.toLowerCase().includes(this.searchText.toLowerCase());

      const bodyMatch =
        this.selectedBodyTypes.length === 0 ||
        this.selectedBodyTypes.includes(car.bodyType);

      const transMatch =
        this.selectedTransmissions.length === 0 ||
        this.selectedTransmissions.includes(car.transmission);

      const driveMatch =
        this.selectedDriveTrains.length === 0 ||
        this.selectedDriveTrains.includes(car.driveTrain);

      const countryMatch =
        this.selectedCountry === 'all' ||
        car.country === this.selectedCountry;

      const brandMatch =
        this.selectedBrand === 'all' ||
        car.brand === this.selectedBrand;

      const yearMatch =
        this.selectedYear === 'all' ||
        car.year === +this.selectedYear;

      let priceMatch = false;
      if (this.selectedPrice === 'all') priceMatch = true;
      else if (this.selectedPrice === '1') priceMatch = car.price < 2000000;
      else if (this.selectedPrice === '2') priceMatch = car.price <= 5000000;
      else if (this.selectedPrice === '3') priceMatch = car.price > 5000000;

      let hpMatch = false;
      if (this.selectedHorsepower === 'all') hpMatch = true;
      else if (this.selectedHorsepower === 'low') hpMatch = car.power < 300;
      else if (this.selectedHorsepower === 'medium') hpMatch = car.power <= 450;
      else if (this.selectedHorsepower === 'high') hpMatch = car.power > 450;

      return (
        searchMatch &&
        bodyMatch &&
        transMatch &&
        driveMatch &&
        countryMatch &&
        brandMatch &&
        yearMatch &&
        priceMatch &&
        hpMatch
      );
    });
    
  }

  
  // ================= CHECKBOX HANDLERS =================
  onBodyTypeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (target.checked) this.selectedBodyTypes.push(value);
    else this.selectedBodyTypes = this.selectedBodyTypes.filter(t => t !== value);

    this.filterCars();
  }

  onTransmissionChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (target.checked) this.selectedTransmissions.push(value);
    else this.selectedTransmissions = this.selectedTransmissions.filter(t => t !== value);

    this.filterCars();
  }

  onDriveTrainChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (target.checked) this.selectedDriveTrains.push(value);
    else this.selectedDriveTrains = this.selectedDriveTrains.filter(t => t !== value);

    this.filterCars();
  }
  isSidebarOpen: boolean = false;

toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
}

}



