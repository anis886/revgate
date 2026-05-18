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
  selector: 'app-porschecarmodel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './porschecarmodel.html',
  styleUrl: './porschecarmodel.css'
})
export class PorscheCarModel implements OnInit {
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
      name: '911 Carrera',
      image: 'assets/assetscar_911-carrera.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Carrera',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Carrera T',
      image: 'assets/assetscar_911-carrera T.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Carrera',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    { 
      name: '911 Carrera S',
      image: 'assets/assetscar_911-carrera S.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Carrera',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Carrera 4S',
      image: 'assets/assetscar_911-carrera 4S.png',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Carrera',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2024,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Carrera GTS',
      image: 'assets/assetscar_911-carrera GTS.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Carrera',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Carrera 4 GTS',
      image: 'assets/assetscar_911-carrera 4 GTS.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Carrera',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Carrera Cabriolet',
      image: 'assets/assetscar_911-carrera Cabriolet.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Carrera Cabriolet',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2026,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Carrera T Cabriolet',
      image: 'assets/assetscar_911-carrera T Cabriolet.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Carrera Cabriolet',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2025,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Carrera S Cabriolet',
      image: 'assets/assetscar_911-carrera S Cabriolet.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Carrera Cabriolet',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2025,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Carrera 4S Cabriolet',
      image: 'assets/assetscar_911-carrera 4S Cabriolet.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Carrera Cabriolet',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2025,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Carrera GTS Cabriolet',
      image: 'assets/assetscar_911-carrera GTS Cabriolet.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Carrera Cabriolet',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2024,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Carrera 4 GTS Cabriolet',
      image: 'assets/assetscar_911-carrera 4GTS Cabriolet.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Carrera Cabriolet',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2024,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Targa 4S',
      image: 'assets/assetscar_911-Targa 4S.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Targa',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2024,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Targa 4 GTS',
      image: 'assets/assetscar_911-Targa 4 GTS.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Targa',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2024,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Turbo 50 Years',
      image: 'assets/assetscar_911-Turbo 50 Years.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Turbo',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2024,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Turbo S',
      image: 'assets/assetscar_911-Turbo S.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Turbo',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2025,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 Turbo S Cabriolet',
      image: 'assets/assetscar_911-Turbo S Cabriolet.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'Turbo Cabriolet',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2025,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 GT3',
      image: 'assets/assetscar_911-GT3.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'GT',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2024,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 GT3 with Touring Package',
      image: 'assets/assetscar_911-GT3 With Touring Package.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'GT',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2024,
      price: 8000000,
      horsepower: 580
    },
    {
      name: '911 GT3 RS',
      image: 'assets/assetscar_911-GT3 RS.webp',
      power: 580,
      acceleration: '3.1 s',
      topSpeed: 320,
      fuel: 'Petrol',
      bodyType: 'GT',
      transmission: 'Automatic',
      driveTrain: 'AWD',
      country: 'europe',
      brand: 'Porsche',
      year: 2022,
      price: 8000000,
      horsepower: 580
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
