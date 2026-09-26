import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

interface Car {
  id: string;
  name: string;
  image: string;
  brandType: string;
  route: string;
}

@Component({
  selector: 'app-luxury',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './luxury.html',
  styleUrl: './luxury.css',
})
export class Luxury implements OnInit {
  carId!: string;
  selectedBrandTypes: string[] = [];
  searchText = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  cars: Car[] = [
    {
      name: 'Audi',
      image: 'assets/assetsaudilogo.png',
      brandType: 'Europe',
      id: 'audi',
      route: 'audi'
    },
    {
      name: 'Bmw',
      image: 'assets/assetsbmwlogo.png',
      brandType: 'Europe',
      id: 'bmw',
      route: 'bmw'
    },
    {
      name: 'BYD',
      image: 'assets/assetscarimg5.png',
      brandType: 'China',
      id: 'byd',
      route: 'byd'
    },
    {
      name: 'Cadillac',
      image: 'assets/assetscarimg6.png',
      brandType: 'USA',
      id: 'cadillac',
      route: 'cadillac'
    },
    {
      name: 'DS Automobiles',
      image: 'assets/assetscarimg12.png',
      brandType: 'Europe',
      id: 'ds_automobiles',
      route: 'ds-automobiles'
    },
    {
      name: 'Jaguar',
      image: 'assets/assetsjaguarlogo.png',
      brandType: 'Europe',
      id: 'jaguar',
      route: 'jaguar'
    },
    {
      name: 'Land Rover',
      image: 'assets/assetslandroverlogo.svg',
      brandType: 'Europe',
      id: 'land_rover',
      route: 'land-rover'
    },
    {
      name: 'Lexus',
      image: 'assets/assetslexuslogo.png',
      brandType: 'Japan',
      id: 'lexus',
      route: 'lexus'
    },
    {
      name: 'Maserati',
      image: 'assets/assetsmaseratilogo.png',
      brandType: 'Europe',
      id: 'maserati',
      route: 'maserati'
    },
    {
      name: 'Mercedes',
      image: 'assets/assetsmercedeslogo.png',
      brandType: 'Europe',
      id: 'mercedes',
      route: 'mercedes'
    },
    {
      name: 'Porsche',
      image: 'assets/assetsporschelogo.png',
      brandType: 'Europe',
      id: 'porsche',
      route: 'porsche'
    },
    {
      name: 'Volvo',
      image: 'assets/assetsvolvologo.png',
      brandType: 'Europe',
      id: 'volvo',
      route: 'volvo'
    }
  ];

  get filteredCars(): Car[] {
    return this.cars.filter(car => {
      const matchSearch =
        this.searchText.trim() === '' ||
        car.name.toLowerCase().includes(this.searchText.toLowerCase().trim()) ||
        car.brandType.toLowerCase().includes(this.searchText.toLowerCase().trim());
      const matchRegion =
        this.selectedBrandTypes.length === 0 || this.selectedBrandTypes.includes(car.brandType);
      return matchSearch && matchRegion;
    });
  }

  get activeFiltersCount(): number {
    let count = this.selectedBrandTypes.length;
    if (this.searchText.trim() !== '') count++;
    return count;
  }

  onBrandTypeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (target.checked) {
      this.selectedBrandTypes.push(value);
    } else {
      this.selectedBrandTypes = this.selectedBrandTypes.filter(t => t !== value);
    }
  }

  toggleBrandType(type: string) {
    if (this.selectedBrandTypes.includes(type)) {
      this.selectedBrandTypes = this.selectedBrandTypes.filter(t => t !== type);
    } else {
      this.selectedBrandTypes.push(type);
    }
  }

  removeBrandType(region: string) {
    this.selectedBrandTypes = this.selectedBrandTypes.filter(r => r !== region);
  }

  clearAllFilters() {
    this.selectedBrandTypes = [];
    this.searchText = '';
  }
}
