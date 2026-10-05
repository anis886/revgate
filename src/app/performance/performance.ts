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
  selector: 'app-performance',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './performance.html',
  styleUrl: './performance.css',
})
export class Performance implements OnInit {
  carId!: string;
  selectedBrandTypes: string[] = [];
  searchText = '';
  isSidebarOpen = false;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
  
  cars: Car[] = [
    // Performance Category Brands Only (Sorted alphabetically A to Z)
    {
      name: 'Alfa Romeo',
      image: 'assets/assetsalfaromeologocolor.png',
      brandType: 'Europe',
      id: 'alfa-romeo',
      route: 'alfa-romeo'
    },
    {
      name: 'Audi',
      image: 'assets/assetsaudilogo.png',
      brandType: 'Europe',
      id: 'audi',
      route: 'audi'
    },
    {
      name: 'Aston Martin',
      image: 'assets/assetsastonmartinlogo.png',
      brandType: 'Europe',
      id: 'astonmartin',
      route: 'astonmartin'
    },
    {
      name: 'BAIC',
      image: 'assets/assetsbaiclogo.png',
      brandType: 'China',
      id: 'baic',
      route: 'baic'
    },
    {
      name: 'Bmw',
      image: 'assets/assetsbmwlogo.png',
      brandType: 'Europe',
      id: 'bmw',
      route: 'bmw'
    },
    {
      name: 'Chevrolet',
      image: 'assets/assetscarimg7.png',
      brandType: 'USA',
      id: 'chevrolet',
      route: 'chevrolet'
    },
    {
      name: 'Corvette',
      image: 'assets/assetscorvettelogo.png',
      brandType: 'USA',
      id: 'corvette',
      route: 'corvette'
    },
    {
      name: 'Citroën',
      image: 'assets/assetscarimg10.png',
      brandType: 'Europe',
      id: 'citroen',
      route: 'citroen'
    },
    {
      name: 'Cupra',
      image: 'assets/assetscarimg11.png',
      brandType: 'Europe',
      id: 'cupra',
      route: 'cupra'
    },
    {
      name: 'Dodge',
      image: 'assets/assetsdodgelogo.png',
      brandType: 'USA',
      id: 'dodge',
      route: 'dodge'
    },
    {
      name: 'Ferrari',
      image: 'assets/assetsferrarilogo.svg',
      brandType: 'Europe',
      id: 'ferrari',
      route: 'ferrari'
    },
    {
      name: 'Fiat',
      image: 'assets/assetsFiatlogo.png',
      brandType: 'Europe',
      id: 'fiat',
      route: 'fiat'
    },
    {
      name: 'Ford',
      image: 'assets/assetsfordLogo.png',
      brandType: 'USA',
      id: 'ford',
      route: 'ford'
    },
    {
      name: 'Honda',
      image: 'assets/assetsHonda.svg',
      brandType: 'Japan',
      id: 'honda',
      route: 'honda'
    },
    {
      name: 'Infiniti',
      image: 'assets/assetsinfinitilogo.png',
      brandType: 'Japan',
      id: 'infiniti',
      route: 'infiniti'
    },
    {
      name: 'Jeep',
      image: 'assets/assetsjeeplogo.png',
      brandType: 'USA',
      id: 'jeep',
      route: 'jeep'
    },
    {
      name: 'Jetour',
      image: 'assets/assetsjetourlogo.png',
      brandType: 'China',
      id: 'jetour',
      route: 'jetour'
    },
    {
      name: 'Lamborghini',
      image: 'assets/assetscarlam.png',
      brandType: 'Europe',
      id: 'lamborghini',
      route: 'lamborghini'
    },
    {
      name: 'Mazda',
      image: 'assets/assetsmazdalogo.png',
      brandType: 'Japan',
      id: 'mazda',
      route: 'mazda'
    },
    {
      name: 'Mercedes-AMG',
      image: 'assets/assetsmercedeslogo.png',
      brandType: 'Europe',
      id: 'mercedes',
      route: 'mercedes'
    },
    {
      name: 'Mitsubishi',
      image: 'assets/assetsmitsubishilogo.png',
      brandType: 'Japan',
      id: 'mitsubishi',
      route: 'mitsubishi'
    },
    {
      name: 'Mclaren',
      image: 'assets/assetsmclarenlogo.png',
      brandType: 'Europe',
      id: 'mclaren',
      route: 'mclaren'
    },
    {
      name: 'Nissan',
      image: 'assets/assetsnissanlogo.svg',
      brandType: 'Japan',
      id: 'nissan',
      route: 'nissan'
    },
    {
      name: 'Porsche',
      image: 'assets/assetsporschelogo.png',
      brandType: 'Europe',
      id: 'porsche',
      route: 'porsche'
    },
    {
      name: 'Seat',
      image: 'assets/assetsseatlogo.png',
      brandType: 'Europe',
      id: 'seat',
      route: 'seat'
    },
    {
      name: 'Škoda',
      image: 'assets/assetsskodalogo.png',
      brandType: 'Europe',
      id: 'skoda',
      route: 'skoda'
    },
    {
      name: 'Subaru',
      image: 'assets/assetssubarulogo.png',
      brandType: 'Japan',
      id: 'subaru',
      route: 'subaru'
    },
    {
      name: 'Suzuki',
      image: 'assets/assetssuzukilogo.png',
      brandType: 'Japan',
      id: 'suzuki',
      route: 'suzuki'
    },
    {
      name: 'Toyota',
      image: 'assets/assetstoyotalogo.png',
      brandType: 'Japan',
      id: 'toyota',
      route: 'toyota'
    }
  ];
  
  get filteredCars(): Car[] {
    return this.cars.filter(car => {
      const searchMatch =
        this.searchText === '' ||
        car.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        car.brandType.toLowerCase().includes(this.searchText.toLowerCase());

      const regionMatch =
        this.selectedBrandTypes.length === 0 ||
        this.selectedBrandTypes.includes(car.brandType);

      return searchMatch && regionMatch;
    });
  }

  get activeFiltersCount(): number {
    let count = 0;
    if (this.searchText !== '') count++;
    if (this.selectedBrandTypes.length > 0) count++;
    return count;
  }

  onBrandTypeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (target.checked) {
      if (!this.selectedBrandTypes.includes(value)) {
        this.selectedBrandTypes.push(value);
      }
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
    this.searchText = '';
    this.selectedBrandTypes = [];
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
