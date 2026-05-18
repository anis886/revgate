import { Component } from '@angular/core';

@Component({
  selector: 'app-bmw7series',
  imports: [],
  templateUrl: './bmw7series.html',
  styleUrl: './bmw7series.css',
})
export class Bmw7series {
 img: string = 'assets/bmw740idriverside.png';

  car(src: string) {
    this.img = src;
  }


  scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
}
