import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarModel } from '../../pages/performance-brand/models/brand-config.model';

@Component({
  selector: 'app-model-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './model-card.component.html',
  styleUrl: './model-card.component.scss'
})
export class ModelCardComponent {
  @Input({ required: true }) model!: CarModel;

  get isInternalLink(): boolean {
    return !!this.model.link && this.model.link.startsWith('/');
  }
}
