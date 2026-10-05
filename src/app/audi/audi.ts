import { Component } from '@angular/core';
import { PerformanceBrandComponent } from '../pages/performance-brand/performance-brand.component';

@Component({
  selector: 'app-audi',
  standalone: true,
  imports: [PerformanceBrandComponent],
  templateUrl: './audi.html',
  styleUrl: './audi.css',
})
export class Audi {}
