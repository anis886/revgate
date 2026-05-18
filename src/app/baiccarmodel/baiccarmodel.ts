import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Car {
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
  selector: 'app-baiccarmodel',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './baiccarmodel.html',
  styleUrl: './baiccarmodel.css',
})
export class Baiccarmodel implements OnInit {
  selectedId: number | null = null;
  carId!: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.carId = this.route.snapshot.paramMap.get('id')!;
    console.log(this.carId);
    this.route.params.subscribe(params => {
      this.selectedId = +params['id'];
      // You can add logic here to filter or select a car based on id
    });
  }

  // ================= DATA =================
  cars: Car[] = [
    
    {
      name: 'BAIC BJ30',
      image: 'assets/assetsbj30.png',
      power: 233,
      acceleration: '7.9 s',
      topSpeed: 185,
      fuel: 'Petrol',
      bodyType: 'Off-road',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'China',
      brand: 'BAIC',
      year: 2025,
      price: 1800000,
      horsepower: 233
    },
    {
      name: 'BAIC BJ40 Plus',
      image: 'assets/assetsbj40plus.png',
      power: 224,
      acceleration: '8.5 s',
      topSpeed: 170,
      fuel: 'Petrol',
      bodyType: 'Off-road',
      transmission: 'Automatic',
      driveTrain: '4WD',
      country: 'China',
      brand: 'BAIC',
      year: 2025,
      price: 2100000,
      horsepower: 224
    },
    {
      name: 'BAIC BJ60',
      image: 'assets/assetsbj60.png',
      power: 249,
      acceleration: '8.2 s',
      topSpeed: 175,
      fuel: 'Petrol',
      bodyType: 'Off-road',
      transmission: 'Automatic',
      driveTrain: '4WD',
      country: 'China',
      brand: 'BAIC',
      year: 2025,
      price: 2400000,
      horsepower: 249
    },
    {
      name: 'BAIC BJ80',
      image: 'assets/assetsbj80.png',
      power: 249,
      acceleration: '8.0 s',
      topSpeed: 180,
      fuel: 'Petrol',
      bodyType: 'Off-road',
      transmission: 'Automatic',
      driveTrain: '4WD',
      country: 'China',
      brand: 'BAIC',
      year: 2025,
      price: 2600000,
      horsepower: 249
    },
    {
      name: 'ALL NEW X7',
      image: 'assets/assetsbj60.png',
      power: 249,
      acceleration: '8.0 s',
      topSpeed: 180,
      fuel: 'Petrol',
      bodyType: 'SUV',
      transmission: 'Automatic',
      driveTrain: '4WD',
      country: 'China',
      brand: 'BAIC',
      year: 2025,
      price: 2600000,
      horsepower: 249
    },
    {
      name: 'X55 II',
      image: 'assets/assetsbj40plus.png',
      power: 249,
      acceleration: '8.0 s',
      topSpeed: 180,
      fuel: 'Petrol',
      bodyType: 'SUV',
      transmission: 'Automatic',
      driveTrain: '4WD',
      country: 'China',
      brand: 'BAIC',
      year: 2025,
      price: 2600000,
      horsepower: 249
    },
    {
      name: 'U5 PLus',
      image: 'assets/assetsu5plus.png',
      power: 249,
      acceleration: '8.0 s',
      topSpeed: 180,
      fuel: 'Petrol',
      bodyType: 'Sedan',
      transmission: 'Automatic',
      driveTrain: '4WD',
      country: 'China',
      brand: 'BAIC',
      year: 2025,
      price: 2600000,
      horsepower: 249
    },
    {
      name: 'EU5',
      image: 'assets/assetseu5.png',
      power: 249,
      acceleration: '8.0 s',
      topSpeed: 180,
      fuel: 'Petrol',
      bodyType: 'EV',
      transmission: 'Automatic',
      driveTrain: '4WD',
      country: 'China',
      brand: 'BAIC',
      year: 2025,
      price: 2600000,
      horsepower: 249
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



