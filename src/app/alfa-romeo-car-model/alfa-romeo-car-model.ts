import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-alfa-romeo-car-model',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './alfa-romeo-car-model.html',
  styleUrl: './alfa-romeo-car-model.css',
})
export class AlfaRomeoCarModel implements OnInit {
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
      name: 'Tonale',
      image: 'assets/assets alfaromeo tonale.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Tonale',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: 'Tonale Sprint',
      image: 'assets/assets alfaromeo tonale.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Tonale',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: 'Tonale Ti',
      image: 'assets/assets alfaromeo tonale.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Tonale',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: 'Tonale Veloce',
      image: 'assets/assets alfaromeo tonale.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Tonale',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: 'Tonale Plug-in Hybrid Q4',
      image: 'assets/assets alfaromeo tonale.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Tonale',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: 'Stelvio',
      image: 'assets/assets alfaromeo stelvio.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Stelvio',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: 'Stelvio Sprint',
      image: 'assets/assets alfaromeo stelvio.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Stelvio',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: 'Stelvio Veloce',
      image: 'assets/assets alfaromeo stelvio.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Stelvio',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: 'Stelvio Quadrifoglio',
      image: 'assets/assets alfaromeo stelvio quadrifoglio.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Stelvio',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: 'Giulia',
      image: 'assets/assets alfaromeo giulia.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Giulia',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: 'Giulia Sprint',
      image: 'assets/assets alfaromeo giulia.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Giulia',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: 'Giulia Veloce',
      image: 'assets/assets alfaromeo giulia.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Giulia',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: 'Giulia Quadrifoglio',
      image: 'assets/assets alfaromeo giulia quadrifoglio.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Giulia',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
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

