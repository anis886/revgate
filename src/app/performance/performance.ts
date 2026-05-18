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
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
  
  cars: Car[] = [
    // Sorted alphabetically A to Z
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
      name: 'Chery',
      image: 'assets/assetscarimg8.png',
      brandType: 'China',
      id: 'chery',
      route: 'chery'
    },
    {
      name: 'Changan',
      image: 'assets/assetscarimg9.png',
      brandType: 'China',
      id: 'changan',
      route: 'changan'
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
      name: 'DS Automobiles',
      image: 'assets/assetscarimg12.png',
      brandType: 'Europe',
      id: 'ds_automobiles',
      route: 'ds-automobiles'
    },
    {
      name: 'Dongfeng',
      image: 'assets/assetsdongfenglogo.png',
      brandType: 'China',
      id: 'dongfeng',
      route: 'dongfeng'
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
      name: 'Geely',
      image: 'assets/assetsgeelylogo.png',
      brandType: 'China',
      id: 'geely',
      route: 'geely'
    },
    {
      name: 'Genesis',
      image: 'assets/assetsGenesislogo.svg',
      brandType: 'Korea',
      id: 'genesis',
      route: 'genesis'
    },
    {
      name: 'Great Wall Motors',
      image: 'assets/assetsgreatwallmotorslogo.png',
      brandType: 'China',
      id: 'great_wall_motors',
      route: 'great-wall-motors'
    },
    {
      name: 'Haval',
      image: 'assets/assetshavallogo.png',
      brandType: 'China',
      id: 'haval',
      route: 'haval'
    },
    {
      name: 'Honda',
      image: 'assets/assetsHonda.svg',
      brandType: 'Japan',
      id: 'honda',
      route: 'honda'
    },
    {
      name: 'Hyundai',
      image: 'assets/assetshyundai.png',
      brandType: 'Korea',
      id: 'hyundai',
      route: 'hyundai'
    },
    {
      name: 'Infiniti',
      image: 'assets/assetsinfinitilogo.png',
      brandType: 'Japan',
      id: 'infiniti',
      route: 'infiniti'
    },
    {
      name: 'Jaguar',
      image: 'assets/assetsjaguarlogo.png',
      brandType: 'Europe',
      id: 'jaguar',
      route: 'jaguar'
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
      name: 'Kia',
      image: 'assets/assetskialogo.svg',
      brandType: 'Korea',
      id: 'kia',
      route: 'kia'
    },
    {
      name: 'Lamborghini',
      image: 'assets/assetscarlam.png',
      brandType: 'Europe',
      id: 'lamborghini',
      route: 'lamborghini'
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
      name: 'Mazda',
      image: 'assets/assetsmazdalogo.png',
      brandType: 'Japan',
      id: 'mazda',
      route: 'mazda'
    },
    {
      name: 'Mercedes',
      image: 'assets/assetsmercedeslogo.png',
      brandType: 'Europe',
      id: 'mercedes',
      route: 'mercedes'
    },
    {
      name: 'Mini',
      image: 'assets/assetsminilogo.svg',
      brandType: 'Europe',
      id: 'mini',
      route: '/main/mini'
    },
    {
      name: 'Mitsubishi',
      image: 'assets/assetsmitsubishilogo.png',
      brandType: 'Japan',
      id: 'mitsubishi',
      route: 'mitsubishi'
    },
    {
      name: 'MG',
      image: 'assets/assetsmglogo.png',
      brandType: 'China',
      id: 'mg',
      route: 'mg'
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
      name: 'Opel',
      image: 'assets/assetsopellogo.svg',
      brandType: 'Europe',
      id: 'opel',
      route: 'opel'
    },
    {
      name: 'Peugeot',
      image: 'assets/assetspeugeotlogo.avif',
      brandType: 'Europe',
      id: 'peugeot',
      route: 'peugeot'
    },
    {
      name: 'Porsche',
      image: 'assets/assetsporschelogo.png',
      brandType: 'Europe',
      id: 'porsche',
      route: 'porsche'
    },
    {
      name: 'Renault',
      image: 'assets/assetsrenaultlogo.png',
      brandType: 'Europe',
      id: 'renault',
      route: 'renault'
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
      name: 'Tesla',
      image: 'assets/assetsteslalogo.png',
      brandType: 'USA',
      id: 'tesla',
      route: 'tesla'
    },
    {
      name: 'Toyota',
      image: 'assets/assetstoyotalogo.png',
      brandType: 'Japan',
      id: 'toyota',
      route: 'toyota'
    },
    {
      name: 'Volkswagen',
      image: 'assets/assetsvolkswagenlogo.png',
      brandType: 'Europe',
      id: 'volkswagen',
      route: 'volkswagen'
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
    return this.cars.filter(car => 
      (this.selectedBrandTypes.length === 0 || this.selectedBrandTypes.includes(car.brandType))
    );
  }
  
  // Handlers for checkboxes
  onBrandTypeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (target.checked) {
      this.selectedBrandTypes.push(value);
    } else {
      this.selectedBrandTypes = this.selectedBrandTypes.filter(t => t !== value);
    }
  }
  }


