import { Component } from '@angular/core';
import { PerformanceBrandComponent } from '../performance-brand/performance-brand.component';

@Component({
  selector: 'app-bmw-page',
  standalone: true,
  imports: [PerformanceBrandComponent],
  template: '<app-performance-brand [brandId]="\'bmw\'"></app-performance-brand>'
})
export class BmwComponent {}
