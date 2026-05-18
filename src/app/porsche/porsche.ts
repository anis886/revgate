import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-porsche',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './porsche.html',
  styleUrl: './porsche.css',
})
export class Porsche {
    ngAfterViewInit() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }
}