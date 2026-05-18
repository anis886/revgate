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
  selector: 'app-audicarmodel',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './audicarmodel.html',
  styleUrl: './audicarmodel.css',
})
export class Audicarmodel implements OnInit {
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
      name: 'Audi A3',
      image: 'assets/assetsa3.webp',
      power: 201,
      acceleration: '7.1 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'A3',
      transmission: 'Manual',
      driveTrain: 'FWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 3500000,
      horsepower: 201
    },
    {
      name: 'Audi A3 Sportback',
      image: 'assets/assetsa3sportback.webp',
      power: 201,
      acceleration: '7.1 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'A3',
      transmission: 'Manual',
      driveTrain: 'FWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 3500000,
      horsepower: 201
    },
    {
      name: 'Audi A4',
      image: 'assets/assetsa4.png',
      power: 245,
      acceleration: '6.3 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'A4',
      transmission: 'Automatic',
      driveTrain: 'FWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 4500000,
      horsepower: 245
    },
    {
      name: 'Audi A8',
      image: 'assets/assetsa8.webp',
      power: 340,
      acceleration: '5.5 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'A8',
      transmission: 'Automatic',
      driveTrain: 'FWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 4500000,
      horsepower: 245
    },
    {
      name: 'Audi Q3',
      image: 'assets/assetsq3.webp',
      power: 201,
      acceleration: '7.4 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Q3',
      transmission: 'Automatic',
      driveTrain: 'FWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 4000000,
      horsepower: 201
    },
    {
      name: 'Audi Q3 Sportback',
      image: 'assets/assetsq3sportback.webp',
      power: 201,
      acceleration: '7.4 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Q3',
      transmission: 'Automatic',
      driveTrain: 'FWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 4000000,
      horsepower: 201
    },
    {
      name: 'Audi Q5',
      image: 'assets/assetsq5.webp',
      power: 245,
      acceleration: '6.1 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Q5',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 5500000,
      horsepower: 245
    },
    {
      name: 'Audi Q6 e-tron',
      image: 'assets/assetsq6etron.webp',
      power: 245,
      acceleration: '6.1 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Q6 e-tron',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 5500000,
      horsepower: 245
    },
    {
      name: 'Audi Q7',
      image: 'assets/assetsq7.webp',
      power: 340,
      acceleration: '5.9 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Q7',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 8500000,
      horsepower: 340
    },
    {
      name: 'Audi Q8',
      image: 'assets/assetsq8.webp',
      power: 340,
      acceleration: '5.5 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'Q8',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 9500000,
      horsepower: 340
    },
    {
      name: 'Audi R8',
      image: 'assets/assetsr8.png',
      power: 620,
      acceleration: '3.1 s',
      topSpeed: 330,
      fuel: 'Petrol',
      bodyType: 'R8',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 25000000,
      horsepower: 620
    },
    {
      name: 'Audi e-tron GT',
      image: 'assets/assetsetrongt.webp',
      power: 408,
      acceleration: '5.7 s',
      topSpeed: 200,
      fuel: 'Electric',
      bodyType: 'e-tron GT',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 8000000,
      horsepower: 408
    },
    {
      name: 'Audi RS3 limousine',
      image: 'assets/assetsrs3limousine.webp',
      power: 400,
      acceleration: '3.8 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'RS3',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 8500000,
      horsepower: 400
    },
    {
      name: 'Audi RS3 Sportback',
      image: 'assets/assetsrs3.webp',
      power: 400,
      acceleration: '3.8 s',
      topSpeed: 155,
      fuel: 'Petrol',
      bodyType: 'RS3',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'Germany',
      brand: 'Audi',
      year: 2023,
      price: 8500000,
      horsepower: 400
    },
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


