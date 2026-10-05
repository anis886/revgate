export type CarCategory = 'All' | 'Coupe' | 'Sedan' | 'SUV' | 'Convertible' | string;

export interface CarModel {
  id: number | string;
  name: string;
  category: string;
  image: string;
  link?: string;
}

export interface InteriorCardConfig {
  image: string;
  model: string;
  label: string;
  isWide?: boolean;
}

export interface ExpressionCardConfig {
  panelClass: string;
  image: string;
  alt: string;
  label: string;
  link?: string;
}

export interface BrandConfig {
  id: string;
  name: string;
  logo: string;
  badgeLogo?: string;
  badgeAlt?: string;
  tagline: string;
  introDescription: string;
  heroImage: string;
  heroAlt: string;
  heroAriaLabel?: string;
  exploreTitle: string;
  exploreDescription: string;
  exploreButtonText?: string;
  exploreButtonLink?: string;
  modelsTitle: string;
  categories: readonly string[];
  models: CarModel[];
  experienceTitle: string;
  experienceDescription: string;
  interiors: InteriorCardConfig[];
  expressionsTitle: string;
  expressionsDescription: string;
  expressions: ExpressionCardConfig[];
  storyTitle: string;
  storyDescription: string;
  storyButtonText?: string;
  storyButtonLink?: string;
  footerWordmark?: string;
}
