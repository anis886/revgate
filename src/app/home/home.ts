import { Component, HostListener, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @Input() brandName: string = 'RevGate';
  @Input() carName?: string;
  @Input() brandLogo?: string;
  @Input() backRoute: string = '/main/home';
  @Input() backLabel: string = 'Back';
  @Input() sections: { id: string; label: string }[] = [];

  isScrolled = false;
  isMobileMenuOpen = false;

  private router = inject(Router);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(id: string) {
    this.isMobileMenuOpen = false;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  isHomeRoute(): boolean {
    const url = this.router.url;
    return url === '/main/home' || url === '/' || url === '' || url === '/main';
  }
}
