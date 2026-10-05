import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interior-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interior-card.component.html',
  styleUrl: './interior-card.component.scss'
})
export class InteriorCardComponent {
  @Input() image = '';
  @Input() model = '';
  @Input() label = '';
}
