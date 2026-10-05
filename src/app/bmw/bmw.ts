import { Component } from '@angular/core';
import { PerformanceBrandComponent } from '../pages/performance-brand/performance-brand.component';

@Component({
  selector: 'app-bmw',
  standalone: true,
  imports: [PerformanceBrandComponent],
  templateUrl: './bmw.html',
  styleUrl: './bmw.css'
})
export class Bmw {}
