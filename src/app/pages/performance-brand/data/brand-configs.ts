import { BrandConfig } from '../models/brand-config.model';

export const BMW_BRAND_CONFIG: BrandConfig = {
  id: 'bmw',
  name: 'BMW',
  logo: 'assets/assetsbmwlogo.png',
  badgeLogo: 'assets/images/logos/bmw-m-logo.png',
  badgeAlt: 'BMW M mark',
  tagline: 'Driven by M.',
  introDescription: 'A higher standard of performance. BMW M combines<br class="desktop-break"> racing heritage with everyday capability, creating vehicles<br class="desktop-break"> that thrill on every road.',
  heroImage: 'assets/images/hero/bmw-m-hero.webp',
  heroAlt: 'Green and blue BMW M performance cars in a pit-lane setting',
  heroAriaLabel: 'BMW M performance vehicles',
  exploreTitle: 'Explore BMW performance.',
  exploreDescription: 'From iconic M cars to high-performance SUVs, discover a collection built on a singular belief:<br class="desktop-break"> more driving pleasure for a more intense world.',
  exploreButtonText: 'EXPLORE MODELS',
  exploreButtonLink: '/main/discover-more',
  modelsTitle: 'Find your M.',
  categories: ['All', 'Coupe', 'Sedan', 'SUV', 'Convertible'] as const,
  models: [
    { id: 'm2', name: 'BMW M2', category: 'Coupe', image: 'assets/images/models/bmw-m2.webp', link: '/main/discover-more' },
    { id: 'm3', name: 'BMW M3', category: 'Sedan', image: 'assets/images/models/bmw-m3.webp', link: '/main/discover-more' },
    { id: 'm4', name: 'BMW M4', category: 'Coupe', image: 'assets/images/models/bmw-m4.webp', link: '/main/discover-more' },
    { id: 'm5', name: 'BMW M5', category: 'Sedan', image: 'assets/images/models/bmw-m5.webp', link: '/main/discover-more' },
    { id: 'x5m', name: 'BMW X5 M Competition', category: 'SUV', image: 'assets/images/models/bmw-x5m.webp', link: '/main/discover-more' },
    { id: 'm4-conv', name: 'BMW M4 Convertible', category: 'Convertible', image: 'assets/images/models/bmw-m4-convertible.webp', link: '/main/discover-more' },
    { id: '3series', name: 'BMW 3 Series', category: 'Sedan', image: 'assets/assetsbmw340i.png', link: '/main/discover-more' },
    { id: '5series', name: 'BMW 5 Series', category: 'Sedan', image: 'assets/assets5series.png', link: '/main/discover-more' },
    { id: 'x1', name: 'BMW X1', category: 'SUV', image: 'assets/assetsx1.png', link: '/main/discover-more' },
    { id: 'x2', name: 'BMW X2', category: 'SUV', image: 'assets/assetsx2.png', link: '/main/discover-more' },
    { id: 'x3', name: 'BMW X3', category: 'SUV', image: 'assets/assetsx3.png', link: '/main/discover-more' },
    { id: 'x5', name: 'BMW X5', category: 'SUV', image: 'assets/assetsx5.png', link: '/main/discover-more' },
    { id: 'x6', name: 'BMW X6', category: 'SUV', image: 'assets/assetsx6.png', link: '/main/discover-more' },
    { id: 'x7', name: 'BMW X7', category: 'SUV', image: 'assets/assetsX7.png', link: '/main/discover-more' },
    { id: 'z4m', name: 'BMW Z4 M40i', category: 'Convertible', image: 'assets/assetsz4m.png', link: '/main/discover-more' },
    { id: 'bmw7series', name: 'BMW 740i', category: 'Sedan', image: 'assets/assetsbmwm740.png', link: '/main/bmw7series' }
  ],
  experienceTitle: 'Inside the M experience.',
  experienceDescription: 'Performance is more than what you feel on the road.<br>It’s a driver-focused environment, crafted with purpose<br>and built to keep you connected.',
  interiors: [
    { image: 'assets/images/interiors/m4-cockpit.webp', model: 'BMW M4', label: 'COCKPIT', isWide: true },
    { image: 'assets/images/interiors/m3-seats.webp', model: 'BMW M3', label: 'FRONT SEATS' },
    { image: 'assets/images/interiors/x5m-rear.webp', model: 'BMW X5 M', label: 'REAR CABIN' }
  ],
  expressionsTitle: 'One marque. Different expressions.',
  expressionsDescription: 'The same M DNA. Distinctly different forms.<br>Coupes for pure connection. SUVs for expanded possibilities.',
  expressions: [
    { panelClass: 'expression-panel--coupe', image: 'assets/images/categories/m-coupe.webp', alt: 'BMW M coupes in a mountain setting', label: 'M Coupe — Pure driving intent', link: '/main/discover-more' },
    { panelClass: 'expression-panel--suv', image: 'assets/images/categories/m-suv.webp', alt: 'BMW M SUV in a mountain setting', label: 'M SUVs — Performance without limits', link: '/main/discover-more' }
  ],
  storyTitle: 'The story behind the badge.',
  storyDescription: 'Born from a racing heritage, BMW M represents a relentless pursuit of higher performance.<br>It’s a mindset, a set of values and a promise to make every drive more extraordinary.',
  storyButtonText: 'DISCOVER BMW M',
  storyButtonLink: '/main/discover-more',
  footerWordmark: 'M PERFORMANCE'
};

export const PORSCHE_BRAND_CONFIG: BrandConfig = {
  id: 'porsche',
  name: 'Porsche',
  logo: 'assets/assetsporschelogo.png',
  tagline: 'Driven by Dreams.',
  introDescription: 'Collection Porsche. Passion, engineering, and performance<br class="desktop-break"> crafted into iconic sports cars built for track and road.',
  heroImage: 'assets/assetscar1.webp',
  heroAlt: 'Porsche 911 performance sports car',
  heroAriaLabel: 'Porsche performance sports vehicles',
  exploreTitle: 'Explore Porsche performance.',
  exploreDescription: 'From the legendary 911 rear-engine sports car to mid-engine precision,<br class="desktop-break"> experience pure driving emotion.',
  exploreButtonText: 'DISCOVER NOW',
  exploreButtonLink: '/main/explore',
  modelsTitle: 'Choose your Porsche.',
  categories: ['All', 'Carrera', 'Targa', 'Turbo', 'GT'] as const,
  models: [
    { id: '911-carrera', name: '911 Carrera', category: 'Carrera', image: 'assets/assetscar_911-carrera.png', link: '/main/explore' },
    { id: '911-carrera-t', name: '911 Carrera T', category: 'Carrera', image: 'assets/assetscar_911-carrera T.png', link: '/main/explore' },
    { id: '911-carrera-s', name: '911 Carrera S', category: 'Carrera', image: 'assets/assetscar_911-carrera S.png', link: '/main/explore' },
    { id: '911-carrera-4s', name: '911 Carrera 4S', category: 'Carrera', image: 'assets/assetscar_911-carrera 4S.png', link: '/main/explore' },
    { id: '911-carrera-gts', name: '911 Carrera GTS', category: 'Carrera', image: 'assets/assetscar_911-carrera GTS.webp', link: '/main/explore' },
    { id: '911-carrera-4gts', name: '911 Carrera 4 GTS', category: 'Carrera', image: 'assets/assetscar_911-carrera 4 GTS.webp', link: '/main/explore' },
    { id: '911-carrera-cab', name: '911 Carrera Cabriolet', category: 'Carrera', image: 'assets/assetscar_911-carrera Cabriolet.webp', link: '/main/explore' },
    { id: '911-carrera-t-cab', name: '911 Carrera T Cabriolet', category: 'Carrera', image: 'assets/assetscar_911-carrera T Cabriolet.webp', link: '/main/explore' },
    { id: '911-carrera-s-cab', name: '911 Carrera S Cabriolet', category: 'Carrera', image: 'assets/assetscar_911-carrera S Cabriolet.webp', link: '/main/explore' },
    { id: '911-carrera-4s-cab', name: '911 Carrera 4S Cabriolet', category: 'Carrera', image: 'assets/assetscar_911-carrera 4S Cabriolet.webp', link: '/main/explore' },
    { id: '911-carrera-gts-cab', name: '911 Carrera GTS Cabriolet', category: 'Carrera', image: 'assets/assetscar_911-carrera GTS Cabriolet.webp', link: '/main/explore' },
    { id: '911-carrera-4gts-cab', name: '911 Carrera 4 GTS Cabriolet', category: 'Carrera', image: 'assets/assetscar_911-carrera 4GTS Cabriolet.webp', link: '/main/explore' },
    { id: '911-targa-4s', name: '911 Targa 4S', category: 'Targa', image: 'assets/assetscar_911-Targa 4S.webp', link: '/main/explore' },
    { id: '911-targa-4gts', name: '911 Targa 4 GTS', category: 'Targa', image: 'assets/assetscar_911-Targa 4 GTS.webp', link: '/main/explore' },
    { id: '911-turbo-50', name: '911 Turbo 50 Years', category: 'Turbo', image: 'assets/assetscar_911-Turbo 50 Years.webp', link: '/main/explore' },
    { id: '911-turbo-s', name: '911 Turbo S', category: 'Turbo', image: 'assets/assetscar_911-Turbo S.webp', link: '/main/explore' },
    { id: '911-turbo-s-cab', name: '911 Turbo S Cabriolet', category: 'Turbo', image: 'assets/assetscar_911-Turbo S Cabriolet.webp', link: '/main/explore' },
    { id: '911-gt3', name: '911 GT3', category: 'GT', image: 'assets/assetscar_911-GT3.webp', link: '/main/explore' },
    { id: '911-gt3-touring', name: '911 GT3 with Touring Package', category: 'GT', image: 'assets/assetscar_911-GT3 With Touring Package.webp', link: '/main/explore' },
    { id: '911-gt3-rs', name: '911 GT3 RS', category: 'GT', image: 'assets/assetscar_911-GT3 RS.webp', link: '/main/explore' }
  ],
  experienceTitle: 'Inside the Porsche cockpit.',
  experienceDescription: 'Driver-centric design focused on performance,<br>precision engineering, and timeless Porsche style.',
  interiors: [
    { image: 'assets/assetscar1.webp', model: 'Porsche 911', label: '911 COCKPIT', isWide: true },
    { image: 'assets/assetscar2.webp', model: 'Porsche 718', label: 'MID-ENGINE CABIN' },
    { image: 'assets/assetsporschesc.avif', model: 'Porsche Sport', label: 'PERFORMANCE LOUNGE' }
  ],
  expressionsTitle: 'One brand. Legendary expressions.',
  expressionsDescription: 'The iconic 911 rear-engine layout alongside<br>precise mid-engine roadsters.',
  expressions: [
    { panelClass: 'expression-panel--coupe', image: 'assets/assetscar1.webp', alt: 'Porsche 911', label: '911 — Rear-engine icon', link: '/main/explore' },
    { panelClass: 'expression-panel--suv', image: 'assets/assetscar2.webp', alt: 'Porsche 718', label: '718 — Mid-engine precision', link: '/main/explore' }
  ],
  storyTitle: 'The Porsche Legacy.',
  storyDescription: 'Founded on a passion for motorsport, Porsche delivers unparalleled engineering<br>and an emotional driving connection.',
  storyButtonText: 'DISCOVER PORSCHE',
  storyButtonLink: '/main/explore',
  footerWordmark: 'PORSCHE PERFORMANCE'
};

export const ALFA_ROMEO_BRAND_CONFIG: BrandConfig = {
  id: 'alfa-romeo',
  name: 'Alfa Romeo',
  logo: 'assets/assetsalfaromeologocolor.png',
  tagline: 'Passion at the center of everything.',
  introDescription: 'Italian design, sportiness and passion. Alfa Romeo creates<br class="desktop-break"> vehicles designed to deliver an extraordinary driving experience.',
  heroImage: 'assets/assetsalfabackground1.jpg',
  heroAlt: 'Alfa Romeo Stelvio performance vehicle',
  heroAriaLabel: 'Alfa Romeo performance vehicles',
  exploreTitle: 'Explore Alfa Romeo.',
  exploreDescription: 'From the versatile Tonale to the high-performance Quadrifoglio range,<br class="desktop-break"> discover Italian automotive excellence.',
  exploreButtonText: 'MORE INFO',
  exploreButtonLink: '/main/more-info',
  modelsTitle: 'Find your Alfa Romeo.',
  categories: ['All', 'SUV', 'Sedan', 'Hybrid'] as const,
  models: [
    { id: 'tonale-sprint', name: 'Tonale Hybrid Sprint', category: 'Hybrid', image: 'assets/assets alfaromeo tonale.png', link: '/main/more-info' },
    { id: 'tonale-ti', name: 'Tonale Hybrid Ti', category: 'Hybrid', image: 'assets/assets alfaromeo tonale.png', link: '/main/more-info' },
    { id: 'tonale-veloce', name: 'Tonale Hybrid Veloce', category: 'Hybrid', image: 'assets/assets alfaromeo tonale.png', link: '/main/more-info' },
    { id: 'stelvio-sprint', name: 'Stelvio Sprint', category: 'SUV', image: 'assets/assets alfaromeo stelvio.png', link: '/main/more-info' },
    { id: 'stelvio-ti', name: 'Stelvio Ti', category: 'SUV', image: 'assets/assets alfaromeo stelvio.png', link: '/main/more-info' },
    { id: 'stelvio-veloce', name: 'Stelvio Veloce', category: 'SUV', image: 'assets/assets alfaromeo stelvio.png', link: '/main/more-info' },
    { id: 'stelvio-quad', name: 'Stelvio Quadrifoglio', category: 'SUV', image: 'assets/assets alfaromeo stelvio quadrifoglio.png', link: '/main/more-info' },
    { id: 'giulia-sprint', name: 'Giulia Sprint', category: 'Sedan', image: 'assets/assets alfaromeo giulia.png', link: '/main/more-info' },
    { id: 'giulia-ti', name: 'Giulia Ti', category: 'Sedan', image: 'assets/assets alfaromeo giulia.png', link: '/main/more-info' },
    { id: 'giulia-veloce', name: 'Giulia Veloce', category: 'Sedan', image: 'assets/assets alfaromeo giulia.png', link: '/main/more-info' },
    { id: 'giulia-quad', name: 'Giulia Quadrifoglio', category: 'Sedan', image: 'assets/assets alfaromeo giulia quadrifoglio.png', link: '/main/more-info' }
  ],
  experienceTitle: 'The Alfa Romeo Experience.',
  experienceDescription: 'Crafted with Italian elegance and race-inspired ergonomic detail.',
  interiors: [
    { image: 'assets/assetstonalebackground.jpg', model: 'Alfa Romeo Tonale', label: 'TONALE CABIN', isWide: true },
    { image: 'assets/assetsgiuliobackground.jpg', model: 'Alfa Romeo Giulia', label: 'GIULIA COCKPIT' },
    { image: 'assets/assetstelviobackground.jpg', model: 'Alfa Romeo Stelvio', label: 'STELVIO CABIN' }
  ],
  expressionsTitle: 'Italian beauty. Racing soul.',
  expressionsDescription: 'Quadrifoglio performance meets elegant everyday sports sedans and SUVs.',
  expressions: [
    { panelClass: 'expression-panel--coupe', image: 'assets/assetsgiulioquadrifogliobackground.jpg', alt: 'Giulia Quadrifoglio', label: 'Quadrifoglio — Pure Performance', link: '/main/more-info' },
    { panelClass: 'expression-panel--suv', image: 'assets/assetsstelvioquadrifogliobackground.jpg', alt: 'Stelvio Quadrifoglio', label: 'Stelvio — Performance SUV', link: '/main/more-info' }
  ],
  storyTitle: 'La Meccanica delle Emozioni.',
  storyDescription: 'For over a century, Alfa Romeo has defined Italian driving passion,<br>combining lightweight engineering with soulful performance.',
  storyButtonText: 'DISCOVER ALFA ROMEO',
  storyButtonLink: '/main/more-info',
  footerWordmark: 'ALFA ROMEO'
};

export const ASTON_MARTIN_BRAND_CONFIG: BrandConfig = {
  id: 'astonmartin',
  name: 'Aston Martin',
  logo: 'assets/assetsastonmartinlogo.png',
  tagline: 'Intensified Performance.',
  introDescription: 'Fernando Alonso\'s Mastery, At Your Fingertips.<br class="desktop-break"> British luxury performance engineering at the highest level.',
  heroImage: 'assets/assetsvalhalladesktop.jpg',
  heroAlt: 'Aston Martin Valhalla hypercar',
  heroAriaLabel: 'Aston Martin performance vehicles',
  exploreTitle: 'Explore Aston Martin.',
  exploreDescription: 'From the thrilling Vantage to the DBX707 SUV and the Valhalla hypercar,<br class="desktop-break"> discover a legacy of ultra-luxury performance.',
  exploreButtonText: 'EXPLORE NOW',
  exploreButtonLink: '/main/discover-now',
  modelsTitle: 'The Aston Martin Lineup.',
  categories: ['All', 'Coupe', 'Convertible', 'SUV', 'Hypercar'] as const,
  models: [
    { id: 'vantage', name: 'Aston Martin Vantage Coupe', category: 'Coupe', image: 'assets/assetsvantage.png', link: '/main/discover-now' },
    { id: 'db12', name: 'Aston Martin DB12 Coupe', category: 'Coupe', image: 'assets/assetsdb12.png', link: '/main/discover-now' },
    { id: 'db12-volante', name: 'Aston Martin DB12 Volante', category: 'Convertible', image: 'assets/assetsdb12Volante.png', link: '/main/discover-now' },
    { id: 'dbs', name: 'Aston Martin DBS Coupe', category: 'Coupe', image: 'assets/vanquish.png', link: '/main/discover-now' },
    { id: 'dbx707', name: 'Aston Martin DBX707', category: 'SUV', image: 'assets/assetsdbx707.png', link: '/main/discover-now' },
    { id: 'valhalla', name: 'Aston Martin Valhalla', category: 'Hypercar', image: 'assets/assetsvalhalla.jpg', link: '/main/discover-now' }
  ],
  experienceTitle: 'Bespoke Craftsmanship.',
  experienceDescription: 'Immerse yourself in hand-crafted luxury materials and cutting-edge digital technology.',
  interiors: [
    { image: 'assets/assetsvalhalladesktop.jpg', model: 'Aston Martin Valhalla', label: 'HYPERCAR COCKPIT', isWide: true },
    { image: 'assets/assetsdbxsbackground.png', model: 'Aston Martin DBX S', label: 'DBX LUXURY CABIN' },
    { image: 'assets/assetsvalhalla.jpg', model: 'Aston Martin Performance', label: 'TRACK COCKPIT' }
  ],
  expressionsTitle: 'Power. Beauty. Soul.',
  expressionsDescription: 'Thrill. Driven. Icon. Driven. Zenith. Driven.',
  expressions: [
    { panelClass: 'expression-panel--suv', image: 'assets/assetsdbxs.png', alt: 'Aston Martin DBX S', label: 'DBX707 — Power SUV', link: '/main/discover-now' },
    { panelClass: 'expression-panel--coupe', image: 'assets/assetsvalhalla.jpg', alt: 'Aston Martin Valhalla', label: 'Valhalla — Mid-Engine Hypercar', link: '/main/discover-now' }
  ],
  storyTitle: 'The Spirit of Aston Martin.',
  storyDescription: 'Born on the track and crafted with relentless precision,<br>Aston Martin embodies world-class grand touring performance.',
  storyButtonText: 'DISCOVER ASTON MARTIN',
  storyButtonLink: '/main/discover-now',
  footerWordmark: 'ASTON MARTIN'
};

export const AUDI_BRAND_CONFIG: BrandConfig = {
  id: 'audi',
  name: 'Audi',
  logo: 'assets/assetsaudilogo.png',
  tagline: 'Vorsprung durch Technik.',
  introDescription: 'High performance engineered with race-proven Quattro technology,<br class="desktop-break"> progressive design, and driver-focused dynamics.',
  heroImage: 'assets/assetsr8.png',
  heroAlt: 'Audi R8 Coupe supercar',
  heroAriaLabel: 'Audi performance sports vehicles',
  exploreTitle: 'Explore Audi performance.',
  exploreDescription: 'From legendary RS sport models to Quattro performance SUVs,<br class="desktop-break"> experience engineering leadership.',
  exploreButtonText: 'DISCOVER AUDI',
  exploreButtonLink: '/main/discover-audi',
  modelsTitle: 'Select your Audi.',
  categories: ['All', 'A3', 'A4', 'A8', 'SUV', 'RS / Sport'] as const,
  models: [
    { id: 'a3', name: 'Audi A3', category: 'A3', image: 'assets/assetsa3.webp', link: '/main/discover-audi' },
    { id: 'a3-sportback', name: 'Audi A3 Sportback', category: 'A3', image: 'assets/assetsa3sportback.webp', link: '/main/discover-audi' },
    { id: 'a4', name: 'Audi A4', category: 'A4', image: 'assets/assetsa4.png', link: '/main/discover-audi' },
    { id: 'a8', name: 'Audi A8', category: 'A8', image: 'assets/assetsa8.webp', link: '/main/discover-audi' },
    { id: 'q3', name: 'Audi Q3', category: 'SUV', image: 'assets/assetsq3.webp', link: '/main/discover-audi' },
    { id: 'q3-sportback', name: 'Audi Q3 Sportback', category: 'SUV', image: 'assets/assetsq3sportback.webp', link: '/main/discover-audi' },
    { id: 'q5', name: 'Audi Q5', category: 'SUV', image: 'assets/assetsq5.webp', link: '/main/discover-audi' },
    { id: 'q7', name: 'Audi Q7', category: 'SUV', image: 'assets/assetsq7.webp', link: '/main/discover-audi' },
    { id: 'q8', name: 'Audi Q8', category: 'SUV', image: 'assets/assetsq8.webp', link: '/main/discover-audi' },
    { id: 'r8', name: 'Audi R8 Coupe', category: 'RS / Sport', image: 'assets/assetsr8.png', link: '/main/discover-audi' },
    { id: 'rs3-limo', name: 'Audi RS3 Limousine', category: 'RS / Sport', image: 'assets/assetsrs3limousine.webp', link: '/main/discover-audi' },
    { id: 'rs3-sportback', name: 'Audi RS3 Sportback', category: 'RS / Sport', image: 'assets/assetsrs3.webp', link: '/main/discover-audi' }
  ],
  experienceTitle: 'Digital interior innovation.',
  experienceDescription: 'Progressive design and digital connectivity engineered around the driver.',
  interiors: [
    { image: 'assets/assetsr8.png', model: 'Audi R8', label: 'R8 SUPERCAR COCKPIT', isWide: true },
    { image: 'assets/assetsrs3limousine.webp', model: 'Audi RS3', label: 'RS3 SPORT CABIN' },
    { image: 'assets/assetsa8.webp', model: 'Audi A8', label: 'A8 EXECUTIVE COCKPIT' }
  ],
  expressionsTitle: 'Quattro performance.',
  expressionsDescription: 'High-performance RS models and versatile Q SUVs.',
  expressions: [
    { panelClass: 'expression-panel--coupe', image: 'assets/assetsr8.png', alt: 'Audi R8 Coupe', label: 'RS / R8 — Supercar performance', link: '/main/discover-audi' },
    { panelClass: 'expression-panel--suv', image: 'assets/assetsq8.webp', alt: 'Audi Q8', label: 'Q Series — Performance SUV capability', link: '/main/discover-audi' }
  ],
  storyTitle: 'Vorsprung durch Technik.',
  storyDescription: 'Through Quattro all-wheel drive and race-tested performance,<br>Audi defines motorsport-inspired driving dynamics.',
  storyButtonText: 'DISCOVER AUDI',
  storyButtonLink: '/main/discover-audi',
  footerWordmark: 'AUDI PERFORMANCE'
};

export const BAIC_BRAND_CONFIG: BrandConfig = {
  id: 'baic',
  name: 'BAIC',
  logo: 'assets/assetsbaiclogo.png',
  tagline: 'Explore Your BAIC.',
  introDescription: 'Tough off-road capability meets intelligent urban design.<br class="desktop-break"> Discover the BAIC performance vehicle lineup.',
  heroImage: 'assets/assetsbaicbackground1.jpg',
  heroAlt: 'BAIC Off-road SUV in mountain scenery',
  heroAriaLabel: 'BAIC off-road and SUV vehicles',
  exploreTitle: 'Explore BAIC lineup.',
  exploreDescription: 'From rugged BJ off-road vehicles to modern urban SUVs.',
  exploreButtonText: 'EXPLORE ALL MODELS',
  exploreButtonLink: '/main/Explore-ALL-Models',
  modelsTitle: 'Find your BAIC.',
  categories: ['All', 'Off-road', 'SUV', 'Sedan'] as const,
  models: [
    { id: 'bj30', name: 'BAIC BJ30', category: 'Off-road', image: 'assets/assetsbj30.png', link: '/main/Explore-ALL-Models' },
    { id: 'bj40plus', name: 'BAIC BJ40 Plus', category: 'Off-road', image: 'assets/assetsbj40plus.png', link: '/main/Explore-ALL-Models' },
    { id: 'bj60', name: 'BAIC BJ60', category: 'Off-road', image: 'assets/assetsbj60.png', link: '/main/Explore-ALL-Models' },
    { id: 'bj80', name: 'BAIC BJ80', category: 'Off-road', image: 'assets/assetsbj80.png', link: '/main/Explore-ALL-Models' },
    { id: 'x7', name: 'ALL NEW X7', category: 'SUV', image: 'assets/assetsallnewx7.png', link: '/main/Explore-ALL-Models' },
    { id: 'x55ii', name: 'X55 II', category: 'SUV', image: 'assets/assetsx55ii.png', link: '/main/Explore-ALL-Models' },
    { id: 'u5plus', name: 'U5 Plus', category: 'Sedan', image: 'assets/assetsu5plus.png', link: '/main/Explore-ALL-Models' }
  ],
  experienceTitle: 'Built for adventure.',
  experienceDescription: 'Comfortable, connected interiors crafted for tough journeys and daily commutes.',
  interiors: [
    { image: 'assets/assetsbaicbackground2.jpg', model: 'BAIC BJ60', label: 'BJ60 CABIN', isWide: true },
    { image: 'assets/assetsbaicbackground3.jpg', model: 'BAIC BJ80', label: 'BJ80 CABIN' }
  ],
  expressionsTitle: 'Off-road capability & performance.',
  expressionsDescription: 'BJ series for adventure seekers, X series for urban performance.',
  expressions: [
    { panelClass: 'expression-panel--coupe', image: 'assets/assetsbj80.png', alt: 'BAIC BJ80', label: 'BJ Series — Off-Road Legend', link: '/main/Explore-ALL-Models' },
    { panelClass: 'expression-panel--suv', image: 'assets/assetsallnewx7.png', alt: 'BAIC X7', label: 'X Series — Modern SUV', link: '/main/Explore-ALL-Models' }
  ],
  storyTitle: 'Intelligent and Tough.',
  storyDescription: 'BAIC crafts versatile, robust vehicles built to empower drivers on any terrain.',
  storyButtonText: 'DISCOVER BAIC',
  storyButtonLink: '/main/Explore-ALL-Models',
  footerWordmark: 'BAIC MOTORS'
};

export const LAMBORGHINI_BRAND_CONFIG: BrandConfig = {
  id: 'lamborghini',
  name: 'Lamborghini',
  logo: 'assets/assetscarlam.png',
  tagline: 'Expect the Unexpected.',
  introDescription: 'Extreme super sports cars crafted with Italian passion and uncompromising performance.',
  heroImage: 'assets/assetsrevuelto.avif',
  heroAlt: 'Lamborghini Revuelto super sports car',
  heroAriaLabel: 'Lamborghini performance supercars',
  exploreTitle: 'Explore Lamborghini.',
  exploreDescription: 'Iconic design and raw V10 & V12 hybrid powertrains.',
  modelsTitle: 'Lamborghini Models.',
  categories: ['All', 'V12 Hybrid'] as const,
  models: [
    { id: 'revuelto', name: 'Lamborghini Revuelto', category: 'V12 Hybrid', image: 'assets/assetsrevuelto.avif', link: '/main/performance' }
  ],
  experienceTitle: 'Inside Lamborghini.',
  experienceDescription: 'A cockpit designed like a jet fighter, built for maximum driver focus.',
  interiors: [
    { image: 'assets/assetsrevuelto.avif', model: 'Lamborghini Revuelto', label: 'MONOFUSELAGE COCKPIT', isWide: true },
    { image: 'assets/assetscarlam.png', model: 'Lamborghini Performance', label: 'RACING INSTRUMENTS' }
  ],
  expressionsTitle: 'Italian Supercar Performance.',
  expressionsDescription: 'Relentless speed, dramatic design, and track-focused dynamics.',
  expressions: [
    { panelClass: 'expression-panel--coupe', image: 'assets/assetsrevuelto.avif', alt: 'Lamborghini Revuelto', label: 'Revuelto — V12 Hybrid Supercar', link: '/main/performance' },
    { panelClass: 'expression-panel--suv', image: 'assets/assetscarlam.png', alt: 'Lamborghini Marque', label: 'Sant\'Agata — Supercar DNA', link: '/main/performance' }
  ],
  storyTitle: 'The House of the Raging Bull.',
  storyDescription: 'Founded in Sant\'Agata Bolognese, Lamborghini pushes the boundaries of automotive performance.',
  storyButtonText: 'DISCOVER LAMBORGHINI',
  storyButtonLink: '/main/performance',
  footerWordmark: 'LAMBORGHINI'
};

export const MCLAREN_BRAND_CONFIG: BrandConfig = {
  id: 'mclaren',
  name: 'McLaren',
  logo: 'assets/assetsmclarenlogo.png',
  tagline: 'Fearlessly Forward.',
  introDescription: 'Born on the Formula 1 track. Lightweight carbon fiber engineering and supercar agility.',
  heroImage: 'assets/assetscarmc.jpg',
  heroAlt: 'McLaren supercar on track',
  heroAriaLabel: 'McLaren performance vehicles',
  exploreTitle: 'Explore McLaren.',
  exploreDescription: 'Uncompromising aerodynamic precision and driver engagement.',
  modelsTitle: 'McLaren Lineup.',
  categories: ['All', 'Supercar'] as const,
  models: [
    { id: '750s', name: 'McLaren 750S', category: 'Supercar', image: 'assets/assetscarmc.jpg', link: '/main/performance' }
  ],
  experienceTitle: 'Formula 1 Technology for the Road.',
  experienceDescription: 'Carbon MonoCell chassis and race-derived aerodynamics.',
  interiors: [
    { image: 'assets/assetscarmc.jpg', model: 'McLaren 750S', label: 'ULTRA-LIGHTWEIGHT COCKPIT', isWide: true },
    { image: 'assets/assetsmclarenlogo.png', model: 'McLaren Racing', label: 'F1 CHASSIS DETAIL' }
  ],
  expressionsTitle: 'Pure Driver Connection.',
  expressionsDescription: 'Every curve, intake, and angle serves a performance purpose.',
  expressions: [
    { panelClass: 'expression-panel--coupe', image: 'assets/assetscarmc.jpg', alt: 'McLaren 750S', label: '750S — Aerodynamic Perfection', link: '/main/performance' },
    { panelClass: 'expression-panel--suv', image: 'assets/assetsmclarenlogo.png', alt: 'McLaren Woking', label: 'McLaren — Track to Road', link: '/main/performance' }
  ],
  storyTitle: 'Track to Road Engineering.',
  storyDescription: 'Bruce McLaren\'s legacy lives on in every supercar designed and built in Woking, England.',
  storyButtonText: 'DISCOVER MCLAREN',
  storyButtonLink: '/main/performance',
  footerWordmark: 'MCLAREN'
};

export const MERCEDES_BRAND_CONFIG: BrandConfig = {
  id: 'mercedes',
  name: 'Mercedes-AMG',
  logo: 'assets/assetsmercedeslogo.png',
  tagline: 'Driving Performance.',
  introDescription: 'Born on the racetrack. Mercedes-AMG combines high-performance engineering<br class="desktop-break"> with motor racing DNA for an unparalleled driving experience.',
  heroImage: 'assets/assetsfrontright.webp',
  heroAlt: 'Mercedes-AMG GT performance coupe',
  heroAriaLabel: 'Mercedes-AMG performance vehicles',
  exploreTitle: 'Explore Mercedes-AMG.',
  exploreDescription: 'High-performance AMG sports vehicles engineered in Affalterbach.',
  modelsTitle: 'Mercedes-AMG Models.',
  categories: ['All', 'Coupe', 'Convertible'] as const,
  models: [
    { id: 'amg-gt', name: 'Mercedes-AMG GT Coupe', category: 'Coupe', image: 'assets/assetsfrontright.webp', link: '/main/performance' },
    { id: 'amg-sl', name: 'Mercedes-AMG SL Roadster', category: 'Convertible', image: 'assets/assetsfrontbrown.webp', link: '/main/performance' }
  ],
  experienceTitle: 'Inside AMG Performance.',
  experienceDescription: 'Driver-focused cockpits built under the "One Man, One Engine" philosophy.',
  interiors: [
    { image: 'assets/imgi_21_desktop.jpg', model: 'Mercedes-AMG GT', label: 'AMG PERFORMANCE COCKPIT', isWide: true },
    { image: 'assets/assetsfrontright.webp', model: 'Mercedes-AMG', label: 'AFFALTERBACH COCKPIT' }
  ],
  expressionsTitle: 'Affalterbach Engineering.',
  expressionsDescription: 'Uncompromising power, emotive sound, and track-tested dynamics.',
  expressions: [
    { panelClass: 'expression-panel--coupe', image: 'assets/assetsfrontright.webp', alt: 'Mercedes-AMG GT', label: 'AMG GT — Pure Driving Performance', link: '/main/performance' },
    { panelClass: 'expression-panel--suv', image: 'assets/assetsfrontbrown.webp', alt: 'Mercedes-AMG SL', label: 'AMG SL — Open-Top Performance', link: '/main/performance' }
  ],
  storyTitle: 'The Spirit of AMG.',
  storyDescription: 'Founded in Affalterbach, AMG turns racing technology into world-class performance.',
  storyButtonText: 'DISCOVER MERCEDES-AMG',
  storyButtonLink: '/main/performance',
  footerWordmark: 'MERCEDES-AMG'
};

export const FERRARI_BRAND_CONFIG: BrandConfig = {
  id: 'ferrari',
  name: 'Ferrari',
  logo: 'assets/assetsferrarilogo.svg',
  tagline: 'Essere Ferrari.',
  introDescription: 'Pure Italian racing heritage. Ferrari designs and builds<br class="desktop-break"> the world\'s most legendary sports cars and supercars.',
  heroImage: 'assets/assetscarimgfer.png.png',
  heroAlt: 'Ferrari 296 GTB supercar',
  heroAriaLabel: 'Ferrari performance supercars',
  exploreTitle: 'Explore Ferrari.',
  exploreDescription: 'Experience Formula 1 technology refined for the road.',
  modelsTitle: 'Ferrari Lineup.',
  categories: ['All', 'Supercar'] as const,
  models: [
    { id: '296gtb', name: 'Ferrari 296 GTB', category: 'Supercar', image: 'assets/assetscarimgfer.png.png', link: '/main/performance' }
  ],
  experienceTitle: 'Inside Maranello.',
  experienceDescription: 'Formula 1-inspired cockpit ergonomics designed for absolute control.',
  interiors: [
    { image: 'assets/assetscarimgfer.png.png', model: 'Ferrari 296 GTB', label: 'F1-INSPIRED COCKPIT', isWide: true },
    { image: 'assets/assetsferrarilogo.svg', model: 'Scuderia Ferrari', label: 'RACETRACK INSTRUMENTS' }
  ],
  expressionsTitle: 'Maranello Excellence.',
  expressionsDescription: 'Legendary V8, V12, and hybrid powertrains paired with aerodynamic mastery.',
  expressions: [
    { panelClass: 'expression-panel--coupe', image: 'assets/assetscarimgfer.png.png', alt: 'Ferrari 296 GTB', label: '296 GTB — Mid-Engine Hybrid V6', link: '/main/performance' },
    { panelClass: 'expression-panel--suv', image: 'assets/assetsferrarilogo.svg', alt: 'Ferrari Maranello', label: 'Scuderia — Pure Racing DNA', link: '/main/performance' }
  ],
  storyTitle: 'The Legacy of Enzo Ferrari.',
  storyDescription: 'Founded in Maranello, Italy, Scuderia Ferrari represents the peak of motorsport passion and engineering excellence.',
  storyButtonText: 'DISCOVER FERRARI',
  storyButtonLink: '/main/performance',
  footerWordmark: 'FERRARI'
};

export const JEEP_BRAND_CONFIG: BrandConfig = {
  id: 'jeep',
  name: 'Jeep',
  logo: 'assets/assetsjeeplogo.png',
  tagline: 'Go Anywhere. Do Anything.',
  introDescription: 'Unmatched 4x4 capability combined with high-powered SRT and Trackhawk engineering.<br class="desktop-break"> Experience ultimate off-road and street performance.',
  heroImage: 'assets/assetsjeepgrandcherokeetwo.avif',
  heroAlt: 'Jeep Grand Cherokee Trackhawk high performance SUV',
  heroAriaLabel: 'Jeep performance vehicles',
  exploreTitle: 'Explore Jeep Performance.',
  exploreDescription: 'Supercharged V8 power meets legendary 4x4 capability.',
  modelsTitle: 'Jeep Performance Lineup.',
  categories: ['All', 'Performance SUV'] as const,
  models: [
    { id: 'trackhawk', name: 'Jeep Grand Cherokee Trackhawk', category: 'Performance SUV', image: 'assets/assetsjeepgrandcherokeetwo.avif', link: '/main/performance' }
  ],
  experienceTitle: 'Inside Jeep Performance.',
  experienceDescription: 'High-performance luxury cabin built for rugged adventures and high-speed highway cruising.',
  interiors: [
    { image: 'assets/assetsjeepgrandcherokeetwo.avif', model: 'Grand Cherokee Trackhawk', label: 'TRACKHAWK COCKPIT', isWide: true },
    { image: 'assets/assetsjeeplogo.png', model: 'Jeep SRT', label: 'SRT BADGING & DETAIL' }
  ],
  expressionsTitle: 'Supercharged 4x4 Power.',
  expressionsDescription: 'Raw V8 horsepower delivered through advanced all-wheel-drive systems.',
  expressions: [
    { panelClass: 'expression-panel--suv', image: 'assets/assetsjeepgrandcherokeetwo.avif', alt: 'Jeep Grand Cherokee Trackhawk', label: 'Trackhawk — Supercharged V8 Power', link: '/main/performance' },
    { panelClass: 'expression-panel--coupe', image: 'assets/assetsjeeplogo.png', alt: 'Jeep Brand', label: 'Jeep — Legendary 4x4 Capability', link: '/main/performance' }
  ],
  storyTitle: 'The Legend of Jeep.',
  storyDescription: 'For over 80 years, Jeep has stood as a global icon of freedom, adventure, and high-capability engineering.',
  storyButtonText: 'DISCOVER JEEP',
  storyButtonLink: '/main/performance',
  footerWordmark: 'JEEP PERFORMANCE'
};

// Registered performance brand configurations
export const BRAND_CONFIGS: Record<string, BrandConfig> = {
  bmw: BMW_BRAND_CONFIG,
  porsche: PORSCHE_BRAND_CONFIG,
  'alfa-romeo': ALFA_ROMEO_BRAND_CONFIG,
  astonmartin: ASTON_MARTIN_BRAND_CONFIG,
  audi: AUDI_BRAND_CONFIG,
  baic: BAIC_BRAND_CONFIG,
  lamborghini: LAMBORGHINI_BRAND_CONFIG,
  mclaren: MCLAREN_BRAND_CONFIG,
  mercedes: MERCEDES_BRAND_CONFIG,
  ferrari: FERRARI_BRAND_CONFIG,
  jeep: JEEP_BRAND_CONFIG
};

// Brand logos lookup for remaining performance brands awaiting content
const OTHER_BRAND_METADATA: Record<string, { name: string; logo: string }> = {
  chevrolet: { name: 'Chevrolet', logo: 'assets/assetscarimg7.png' },
  corvette: { name: 'Corvette', logo: 'assets/assetscorvettelogo.png' },
  citroen: { name: 'Citroën', logo: 'assets/assetscarimg10.png' },
  cupra: { name: 'Cupra', logo: 'assets/assetscarimg11.png' },
  dodge: { name: 'Dodge', logo: 'assets/assetsdodgelogo.png' },
  fiat: { name: 'Fiat', logo: 'assets/assetsFiatlogo.png' },
  ford: { name: 'Ford', logo: 'assets/assetsfordLogo.png' },
  honda: { name: 'Honda', logo: 'assets/assetsHonda.svg' },
  infiniti: { name: 'Infiniti', logo: 'assets/assetsinfinitilogo.png' },
  jeep: { name: 'Jeep', logo: 'assets/assetsjeeplogo.png' },
  jetour: { name: 'Jetour', logo: 'assets/assetsjetourlogo.png' },
  mazda: { name: 'Mazda', logo: 'assets/assetsmazdalogo.png' },
  mitsubishi: { name: 'Mitsubishi', logo: 'assets/assetsmitsubishilogo.png' },
  nissan: { name: 'Nissan', logo: 'assets/assetsnissanlogo.svg' },
  seat: { name: 'Seat', logo: 'assets/assetsseatlogo.png' },
  skoda: { name: 'Škoda', logo: 'assets/assetsskodalogo.png' },
  subaru: { name: 'Subaru', logo: 'assets/assetssubarulogo.png' },
  suzuki: { name: 'Suzuki', logo: 'assets/assetssuzukilogo.png' },
  toyota: { name: 'Toyota', logo: 'assets/assetstoyotalogo.png' }
};

export function createFallbackBrandConfig(brandId: string): BrandConfig {
  const norm = brandId.toLowerCase().trim();
  const meta = OTHER_BRAND_METADATA[norm] || {
    name: brandId.charAt(0).toUpperCase() + brandId.slice(1).replace(/-/g, ' '),
    logo: ''
  };

  return {
    id: norm,
    name: meta.name,
    logo: meta.logo,
    tagline: `Performance & Engineering.`,
    introDescription: `Discover ${meta.name} performance vehicles. High standard engineering built for the drive.`,
    heroImage: '',
    heroAlt: '',
    heroAriaLabel: `${meta.name} performance vehicles`,
    exploreTitle: `Explore ${meta.name}.`,
    exploreDescription: `Discover ${meta.name}'s performance vehicle lineup.`,
    modelsTitle: `Find your ${meta.name}.`,
    categories: ['All'] as const,
    models: [],
    experienceTitle: `The ${meta.name} Experience.`,
    experienceDescription: `Driver-centric design and performance engineering.`,
    interiors: [],
    expressionsTitle: `Distinctive ${meta.name} Expressions.`,
    expressionsDescription: `Performance craftsmanship across every model.`,
    expressions: [],
    storyTitle: `The Legacy of ${meta.name}.`,
    storyDescription: `A dedication to engineering excellence and driving passion.`,
    footerWordmark: `${meta.name.toUpperCase()} PERFORMANCE`
  };
}

export function getBrandConfig(brandId?: string): BrandConfig {
  if (!brandId) return BMW_BRAND_CONFIG;
  const normalized = brandId.toLowerCase().trim();
  if (BRAND_CONFIGS[normalized]) {
    return BRAND_CONFIGS[normalized];
  }
  return createFallbackBrandConfig(normalized);
}
