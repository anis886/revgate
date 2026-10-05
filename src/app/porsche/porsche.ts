import { Component } from '@angular/core';
import { PerformanceBrandComponent } from '../pages/performance-brand/performance-brand.component';

@Component({
  selector: 'app-porsche',
  standalone: true,
  imports: [PerformanceBrandComponent],
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