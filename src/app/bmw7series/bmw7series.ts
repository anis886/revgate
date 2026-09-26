import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Aos from 'aos';

@Component({
  selector: 'app-bmw7series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bmw7series.html',
  styleUrls: ['./bmw7series.css'],
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



   @ViewChild('heroBg') heroBg!: ElementRef<HTMLDivElement>;
  @ViewChild('rpmGauge') rpmGauge!: ElementRef<SVGCircleElement>;
  @ViewChild('rpmValue') rpmValue!: ElementRef<HTMLDivElement>;
  @ViewChild('speedometer') speedometer!: ElementRef<HTMLDivElement>;

  private animated = false;

  specs = [
    {
      value: 'V12',
      label: 'Hybrid Twin-Turbo Engine'
    },
    {
      value: '230',
      label: 'Top Speed (MPH)',
      danger: true
    },
    {
      value: '1,050',
      label: 'Horsepower (BHP)'
    },
    {
      value: '900',
      label: 'Torque (NM)'
    }
  ];

  interiorCards = [
    {
      title: 'HAPTIC WHEEL',
      text: 'F1-inspired geometry wrapped in Italian Alcantara.',
      image:
        'https://images.unsplash.com/photo-1588622119777-628f80456244?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'BESPOKE BUCKETS',
      text: 'Custom-molded carbon fiber seats with active support.',
      image:
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'HOLOGRAPHIC HUD',
      text: 'Vital telemetry projected directly into your line of sight.',
      image:
        'https://images.unsplash.com/photo-1596706037042-3e28ea969a5e?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  ngAfterViewInit(): void {
    this.initAos();
    this.initSpeedometer();
  }

  private initAos(): void {
    if (typeof Aos !== 'undefined') {
      Aos.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic'
      });
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY;

    if (scrollY < window.innerHeight && this.heroBg) {
      this.heroBg.nativeElement.style.transform =
        `translateY(${scrollY * 0.4}px)`;
    }
  }

  private initSpeedometer(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animated) {
            this.animateGauge();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(this.speedometer.nativeElement);
  }

  private animateGauge(): void {
    this.animated = true;

    this.rpmGauge.nativeElement.style.strokeDashoffset = '120';

    let current = 0;
    const target = 8.5;
    const increment = target / 100;

    const interval = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      this.rpmValue.nativeElement.innerText =
        current.toFixed(1);
    }, 25);
  }
}
