import {Routes } from '@angular/router';
import { MainLayout } from './main-layout';

import { HomeContent } from './home-content';
import { Performance } from './performance/performance';
import { Suv } from './suv/suv';
import { Luxury } from './luxury/luxury';
import { Electric } from './electric/electric';
import { NewBeasts } from './new-beasts/new-beasts';
import { Aboutus } from './aboutus/aboutus';
import { Contactus } from './contactus/contactus';
import { Porsche } from './porsche/porsche';
import { PorscheCarModel } from './porschecarmodel/porschecarmodel';
import { AlfaRomeo } from './alfa-romeo/alfa-romeo';
import { AlfaRomeoCarModel } from './alfa-romeo-car-model/alfa-romeo-car-model';
import { Audi } from './audi/audi';
import { Audicarmodel } from './audicarmodel/audicarmodel';
import { Bmw } from './bmw/bmw';
import { Bmwcarmodel } from './bmwcarmodel/bmwcarmodel';
import { Baic } from './baic/baic';
import { Baiccarmodel } from './baiccarmodel/baiccarmodel';
import { Astonmartin } from './astonmartin/astonmartin';
import { Astonmartincarmodel } from './astonmartincarmodel/astonmartincarmodel';
import { Bmw7series } from './bmw7series/bmw7series';


export const routes: Routes = [
  { path: '', redirectTo: 'main/home', pathMatch: 'full' },

  {
    path: 'main',
    component: MainLayout,
    children: [
      { path: 'home', component: HomeContent },
      { path: 'performance', component: Performance },
      { path: 'suv', component: Suv },
      { path: 'luxury', component: Luxury },
      { path: 'electric', component: Electric },
      { path: 'new-beasts', component: NewBeasts },
      { path: 'aboutus', component: Aboutus },
      { path: 'contactus', component: Contactus },
      { path: 'porsche', component: Porsche },
      { path: 'bmw', component: Bmw },
      { path: 'alfa-romeo', component: AlfaRomeo},
      { path: 'audi', component: Audi},
      { path: 'baic', component: Baic},
      { path: 'astonmartin', component: Astonmartin},
      { path: 'discover-now', component: Astonmartincarmodel},
      { path: 'discover-now', component: Audicarmodel},
      { path: 'more-info', component: AlfaRomeoCarModel},
      { path: 'explore', component: PorscheCarModel},
      { path: 'discover-more', component: Bmwcarmodel},
      { path: 'bmw7series', component: Bmw7series},
      { path: 'Explore-ALL-Models', component: Baiccarmodel}
    ]
  }
];