import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { InteriorCardComponent } from '../../components/interior-card/interior-card.component';
import { ModelCardComponent } from '../../components/model-card/model-card.component';
import { BrandConfig, CarModel } from './models/brand-config.model';
import { BMW_BRAND_CONFIG, getBrandConfig } from './data/brand-configs';

@Component({
  selector: 'app-performance-brand',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    ModelCardComponent,
    InteriorCardComponent,
    FooterComponent
  ],
  templateUrl: './performance-brand.component.html',
  styleUrl: './performance-brand.component.scss'
})
export class PerformanceBrandComponent implements OnInit {
  @Input() brandConfig?: BrandConfig;
  @Input() brandId?: string;

  activeCategory: string = 'All';
  searchTerm: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (!this.brandConfig) {
      const routeParam = this.route.snapshot.paramMap.get('id') || this.route.snapshot.data['brandId'];
      const pathBrand = this.route.snapshot.url[0]?.path;
      this.brandConfig = getBrandConfig(this.brandId || routeParam || pathBrand || 'bmw');
    }
  }

  get brand(): BrandConfig {
    return this.brandConfig || BMW_BRAND_CONFIG;
  }

  get categories(): readonly string[] {
    return this.brand.categories && this.brand.categories.length > 0
      ? this.brand.categories
      : ['All'];
  }

  get filteredModels(): CarModel[] {
    const query = this.searchTerm.trim().toLowerCase();
    return (this.brand.models || []).filter((model) => {
      const categoryMatch =
        this.activeCategory === 'All' || model.category === this.activeCategory;
      const searchMatch = !query || model.name.toLowerCase().includes(query);
      return categoryMatch && searchMatch;
    });
  }

  get hasHero(): boolean {
    return !!this.brand.heroImage && this.brand.heroImage.trim().length > 0 && this.brand.heroImage !== this.brand.logo;
  }

  get hasModels(): boolean {
    return Array.isArray(this.brand.models) && this.brand.models.length > 0;
  }

  get hasInteriors(): boolean {
    return Array.isArray(this.brand.interiors) && this.brand.interiors.length > 0;
  }

  get hasExpressions(): boolean {
    return Array.isArray(this.brand.expressions) && this.brand.expressions.length > 0;
  }

  get hasStory(): boolean {
    return !!this.brand.storyTitle && !!this.brand.storyDescription;
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }

  scrollToModels(): void {
    document.getElementById('models')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onExploreClick(): void {
    if (this.brand.exploreButtonLink && this.brand.exploreButtonLink.startsWith('/')) {
      this.router.navigateByUrl(this.brand.exploreButtonLink);
    } else {
      this.scrollToModels();
    }
  }
}
