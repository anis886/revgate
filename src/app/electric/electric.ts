import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Car {
  id: string;
  name: string;
  image: string;
  brandType: string;
  route: string;
}

@Component({
  selector: 'app-electric',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './electric.html',
  styleUrl: './electric.css',
})
export class Electric implements OnInit {
  
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
      name: 'Audi',
      image: 'assets/assetscarimg2.png',
      brandType: 'Europe',
      id: 'audi',
      route: 'audi'
    },
    {
      name: 'Bmw',
      image: 'assets/assetscarimg4.png',
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
      name: 'Dongfeng',
      image: 'assets/assetsdongfenglogo.png',
      brandType: 'China',
      id: 'dongfeng',
      route: 'dongfeng'
    },
    {
      name: 'Geely',
      image: 'assets/assetsgeelylogo.png',
      brandType: 'China',
      id: 'geely',
      route: 'geely'
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
      name: 'Hyundai',
      image: 'assets/assetshyundai.png',
      brandType: 'Korea',
      id: 'hyundai',
      route: 'hyundai'
    },
    {
      name: 'Jaguar',
      image: 'assets/assetsjaguarlogo.png',
      brandType: 'Europe',
      id: 'jaguar',
      route: 'jaguar'
    },
    {
      name: 'Kia',
      image: 'assets/assetskialogo.svg',
      brandType: 'Korea',
      id: 'kia',
      route: 'kia'
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
      name: 'MG',
      image: 'assets/assetsmglogo.png',
      brandType: 'China',
      id: 'mg',
      route: 'mg'
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
      name: 'Tesla',
      image: 'assets/assetsteslalogo.png',
      brandType: 'USA',
      id: 'tesla',
      route: 'tesla'
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


