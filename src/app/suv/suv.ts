
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
interface Car {
  id: string;
  name: string;
  image: string;
  brandType: string;
  route: string;
}
@Component({
  selector: 'app-suv',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './suv.html',
  styleUrl: './suv.css',
})
export class Suv implements OnInit {
  
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
      name: 'Land Rover',
      image: 'assets/assetslandroverlogo.svg',
      brandType: 'Europe',
      id: 'land_rover',
      route: 'land-rover'
    },
    {
      name: 'BMW',
      image: 'assets/assetscarimg4.png',
      brandType: 'Europe',
      id: 'bmw',
      route: 'bmw'
    },
    {
      name: 'Mercedes',
      image: 'assets/assetsmercedeslogo.png',
      brandType: 'Europe',
      id: 'mercedes',
      route: 'mercedes'
    },
    {
      name: 'Audi',
      image: 'assets/assetscarimg2.png',
      brandType: 'Europe',
      id: 'audi',
      route: 'audi'
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
    },
    {
      name: 'Peugeot',
      image: 'assets/assetspeugeotlogo.avif',
      brandType: 'Europe',
      id: 'peugeot',
      route: 'peugeot'
    },
    {
      name: 'Renault',
      image: 'assets/assetsrenaultlogo.png',
      brandType: 'Europe',
      id: 'renault',
      route: 'renault'
    },
    {
      name: 'Škoda',
      image: 'assets/assetsskodalogo.png',
      brandType: 'Europe',
      id: 'skoda',
      route: 'skoda'
    },
    {
      name: 'Seat',
      image: 'assets/assetsseatlogo.png',
      brandType: 'Europe',
      id: 'seat',
      route: 'seat'
    },
    {
      name: 'Cupra',
      image: 'assets/assetscarimg11.png',
      brandType: 'Europe',
      id: 'cupra',
      route: 'cupra'
    },

    // 🇺🇸 USA
    {
      name: 'Jeep',
      image: 'assets/assetsjeeplogo.png',
      brandType: 'USA',
      id: 'jeep',
      route: 'jeep'
    },
    {
      name: 'Ford',
      image: 'assets/assetsfordLogo.png',
      brandType: 'USA',
      id: 'ford',
      route: 'ford'
    },
    {
      name: 'Chevrolet',
      image: 'assets/assetscarimg7.png',
      brandType: 'USA',
      id: 'chevrolet',
      route: 'chevrolet'
    },
    {
      name: 'Cadillac',
      image: 'assets/assetscarimg6.png',
      brandType: 'USA',
      id: 'cadillac',
      route: 'cadillac'
    },

    // 🇯🇵 Japan
    {
      name: 'Toyota',
      image: 'assets/assetstoyotalogo.png',
      brandType: 'Japan',
      id: 'toyota',
      route: 'toyota'
    },
    {
      name: 'Nissan',
      image: 'assets/assetsnissanlogo.svg',
      brandType: 'Japan',
      id: 'nissan',
      route: 'nissan'
    },
    {
      name: 'Honda',
      image: 'assets/assetsHonda.svg',
      brandType: 'Japan',
      id: 'honda',
      route: 'honda'
    },
    {
      name: 'Mazda',
      image: 'assets/assetsmazdalogo.png',
      brandType: 'Japan',
      id: 'mazda',
      route: 'mazda'
    },
    {
      name: 'Mitsubishi',
      image: 'assets/assetsmitsubishilogo.png',
      brandType: 'Japan',
      id: 'mitsubishi',
      route: 'mitsubishi'
    },
    {
      name: 'Subaru',
      image: 'assets/assetssubarulogo.png',
      brandType: 'Japan',
      id: 'subaru',
      route: 'subaru'
    },
    {
      name: 'Lexus',
      image: 'assets/assetslexuslogo.png',
      brandType: 'Japan',
      id: 'lexus',
      route: 'lexus'
    },
    {
      name: 'Infiniti',
      image: 'assets/assetsinfinitilogo.png',
      brandType: 'Japan',
      id: 'infiniti',
      route: 'infiniti'
    },

    // 🇨🇳 China
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
      name: 'Jetour',
      image: 'assets/assetsjetourlogo.png',
      brandType: 'China',
      id: 'jetour',
      route: 'jetour'
    },
    {
      name: 'MG',
      image: 'assets/assetsmglogo.png',
      brandType: 'China',
      id: 'mg',
      route: 'mg'
    },
    {
      name: 'Dongfeng',
      image: 'assets/assetsdongfenglogo.png',
      brandType: 'China',
      id: 'dongfeng',
      route: 'dongfeng'
    },
    {
      name: 'BAIC',
      image: 'assets/assetscarimg3.png',
      brandType: 'China',
      id: 'baic',
      route: 'baic'
    },

    // 🇰🇷 Korea
    {
      name: 'Hyundai',
      image: 'assetshyundai.png',
      brandType: 'Korea',
      id: 'hyundai',
      route: 'hyundai'
    },
    {
      name: 'Kia',
      image: 'assets/assetskialogo.svg',
      brandType: 'Korea',
      id: 'kia',
      route: 'kia'
    },
    {
      name: 'Genesis',
      image: 'assets/assetsGenesislogo.svg',
      brandType: 'Korea',
      id: 'genesis',
      route: 'genesis'
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




