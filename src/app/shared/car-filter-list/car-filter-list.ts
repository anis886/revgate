import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

export interface Car {
  id?: string;
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
  selector: 'app-car-filter-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './car-filter-list.html',
  styleUrl: './car-filter-list.css'
})
export class CarFilterListComponent implements OnInit, OnChanges {
  @Input() brandName: string = '';
  @Input() brandLogo: string = '';
  @Input() cars: Car[] = [];
  @Input() themeColor: string = '#ff1a1a'; // Default to Porsche red

  // Computed options
  bodyTypes: string[] = [];
  transmissions: string[] = [];
  drivetrains: string[] = [];
  years: number[] = [];

  priceOptions: { value: string, label: string }[] = [];
  powerOptions: { value: string, label: string }[] = [];

  // Filter state
  filteredCars: Car[] = [];
  searchText = '';
  selectedBodyTypes: string[] = [];
  selectedTransmissions: string[] = [];
  selectedDriveTrains: string[] = [];
  selectedYear = 'all';
  selectedPrice = 'all';
  selectedHorsepower = 'all';

  isSidebarOpen = false;

  ngOnInit() {
    this.initFilters();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cars']) {
      this.initFilters();
    }
  }

  initFilters() {
    if (!this.cars || this.cars.length === 0) {
      this.filteredCars = [];
      return;
    }

    // Extract dynamic options
    this.bodyTypes = Array.from(new Set(this.cars.map(c => c.bodyType).filter(Boolean))).sort();
    this.transmissions = Array.from(new Set(this.cars.map(c => c.transmission).filter(Boolean))).sort();
    this.drivetrains = Array.from(new Set(this.cars.map(c => c.driveTrain).filter(Boolean))).sort();
    this.years = Array.from(new Set(this.cars.map(c => c.year).filter(y => !isNaN(y)))).sort((a, b) => b - a);

    // Compute dynamic ranges based on max values in current list
    const maxPrice = Math.max(...this.cars.map(c => c.price), 0);
    if (maxPrice > 200000) {
      this.priceOptions = [
        { value: '1', label: 'Under $150k' },
        { value: '2', label: '$150k - $250k' },
        { value: '3', label: 'Over $250k' }
      ];
    } else if (maxPrice > 80000) {
      this.priceOptions = [
        { value: '1', label: 'Under $60k' },
        { value: '2', label: '$60k - $100k' },
        { value: '3', label: 'Over $100k' }
      ];
    } else {
      this.priceOptions = [
        { value: '1', label: 'Under $25k' },
        { value: '2', label: '$25k - $50k' },
        { value: '3', label: 'Over $50k' }
      ];
    }

    const maxPower = Math.max(...this.cars.map(c => c.power), 0);
    if (maxPower > 500) {
      this.powerOptions = [
        { value: 'low', label: 'Under 400 PS' },
        { value: 'medium', label: '400 - 550 PS' },
        { value: 'high', label: 'Over 550 PS' }
      ];
    } else if (maxPower > 300) {
      this.powerOptions = [
        { value: 'low', label: 'Under 250 PS' },
        { value: 'medium', label: '250 - 350 PS' },
        { value: 'high', label: 'Over 350 PS' }
      ];
    } else {
      this.powerOptions = [
        { value: 'low', label: 'Under 150 PS' },
        { value: 'medium', label: '150 - 250 PS' },
        { value: 'high', label: 'Over 250 PS' }
      ];
    }

    this.filterCars();
  }

  get activeFiltersCount(): number {
    let count = 0;
    if (this.searchText !== '') count++;
    if (this.selectedBodyTypes.length > 0) count++;
    if (this.selectedTransmissions.length > 0) count++;
    if (this.selectedDriveTrains.length > 0) count++;
    if (this.selectedYear !== 'all') count++;
    if (this.selectedPrice !== 'all') count++;
    if (this.selectedHorsepower !== 'all') count++;
    return count;
  }

  filterCars() {
    if (!this.cars) return;
    
    const maxPrice = Math.max(...this.cars.map(c => c.price), 0);
    const maxPower = Math.max(...this.cars.map(c => c.power), 0);

    this.filteredCars = this.cars.filter(car => {
      const searchMatch =
        this.searchText === '' ||
        car.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        car.bodyType.toLowerCase().includes(this.searchText.toLowerCase());

      const bodyMatch =
        this.selectedBodyTypes.length === 0 ||
        this.selectedBodyTypes.includes(car.bodyType);

      const transMatch =
        this.selectedTransmissions.length === 0 ||
        this.selectedTransmissions.includes(car.transmission);

      const driveMatch =
        this.selectedDriveTrains.length === 0 ||
        this.selectedDriveTrains.includes(car.driveTrain);

      const yearMatch =
        this.selectedYear === 'all' ||
        car.year === +this.selectedYear;

      let priceMatch = false;
      if (this.selectedPrice === 'all') {
        priceMatch = true;
      } else {
        if (maxPrice > 200000) {
          if (this.selectedPrice === '1') priceMatch = car.price < 150000;
          else if (this.selectedPrice === '2') priceMatch = car.price >= 150000 && car.price <= 250000;
          else if (this.selectedPrice === '3') priceMatch = car.price > 250000;
        } else if (maxPrice > 80000) {
          if (this.selectedPrice === '1') priceMatch = car.price < 60000;
          else if (this.selectedPrice === '2') priceMatch = car.price >= 60000 && car.price <= 100000;
          else if (this.selectedPrice === '3') priceMatch = car.price > 100000;
        } else {
          if (this.selectedPrice === '1') priceMatch = car.price < 25000;
          else if (this.selectedPrice === '2') priceMatch = car.price >= 25000 && car.price <= 50000;
          else if (this.selectedPrice === '3') priceMatch = car.price > 50000;
        }
      }

      let hpMatch = false;
      if (this.selectedHorsepower === 'all') {
        hpMatch = true;
      } else {
        if (maxPower > 500) {
          if (this.selectedHorsepower === 'low') hpMatch = car.power < 400;
          else if (this.selectedHorsepower === 'medium') hpMatch = car.power >= 400 && car.power <= 550;
          else if (this.selectedHorsepower === 'high') hpMatch = car.power > 550;
        } else if (maxPower > 300) {
          if (this.selectedHorsepower === 'low') hpMatch = car.power < 250;
          else if (this.selectedHorsepower === 'medium') hpMatch = car.power >= 250 && car.power <= 350;
          else if (this.selectedHorsepower === 'high') hpMatch = car.power > 350;
        } else {
          if (this.selectedHorsepower === 'low') hpMatch = car.power < 150;
          else if (this.selectedHorsepower === 'medium') hpMatch = car.power >= 150 && car.power <= 250;
          else if (this.selectedHorsepower === 'high') hpMatch = car.power > 250;
        }
      }

      return searchMatch && bodyMatch && transMatch && driveMatch && yearMatch && priceMatch && hpMatch;
    });
  }

  onBodyTypeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (target.checked) {
      if (!this.selectedBodyTypes.includes(value)) this.selectedBodyTypes.push(value);
    } else {
      this.selectedBodyTypes = this.selectedBodyTypes.filter(t => t !== value);
    }
    this.filterCars();
  }

  toggleBodyType(type: string) {
    if (this.selectedBodyTypes.includes(type)) {
      this.selectedBodyTypes = this.selectedBodyTypes.filter(t => t !== type);
    } else {
      this.selectedBodyTypes.push(type);
    }
    this.filterCars();
  }

  onTransmissionChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (target.checked) {
      if (!this.selectedTransmissions.includes(value)) this.selectedTransmissions.push(value);
    } else {
      this.selectedTransmissions = this.selectedTransmissions.filter(t => t !== value);
    }
    this.filterCars();
  }

  toggleTransmission(trans: string) {
    if (this.selectedTransmissions.includes(trans)) {
      this.selectedTransmissions = this.selectedTransmissions.filter(t => t !== trans);
    } else {
      this.selectedTransmissions.push(trans);
    }
    this.filterCars();
  }

  onDriveTrainChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (target.checked) {
      if (!this.selectedDriveTrains.includes(value)) this.selectedDriveTrains.push(value);
    } else {
      this.selectedDriveTrains = this.selectedDriveTrains.filter(t => t !== value);
    }
    this.filterCars();
  }

  toggleDriveTrain(drive: string) {
    if (this.selectedDriveTrains.includes(drive)) {
      this.selectedDriveTrains = this.selectedDriveTrains.filter(d => d !== drive);
    } else {
      this.selectedDriveTrains.push(drive);
    }
    this.filterCars();
  }

  selectYear(yr: string) {
    this.selectedYear = yr;
    this.filterCars();
  }

  selectPrice(priceVal: string) {
    this.selectedPrice = priceVal;
    this.filterCars();
  }

  selectHorsepower(hpVal: string) {
    this.selectedHorsepower = hpVal;
    this.filterCars();
  }

  clearAllFilters() {
    this.searchText = '';
    this.selectedBodyTypes = [];
    this.selectedTransmissions = [];
    this.selectedDriveTrains = [];
    this.selectedYear = 'all';
    this.selectedPrice = 'all';
    this.selectedHorsepower = 'all';
    this.filterCars();
  }

  removeBodyType(body: string) {
    this.selectedBodyTypes = this.selectedBodyTypes.filter(b => b !== body);
    this.filterCars();
  }

  removeTransmission(trans: string) {
    this.selectedTransmissions = this.selectedTransmissions.filter(t => t !== trans);
    this.filterCars();
  }

  removeDriveTrain(drive: string) {
    this.selectedDriveTrains = this.selectedDriveTrains.filter(d => d !== drive);
    this.filterCars();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
