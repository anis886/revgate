import { Component } from '@angular/core';
import { Landingpage } from './landingpage/landingpage';
import { NewBeasts } from './new-beasts/new-beasts';
import { Aboutus } from './aboutus/aboutus';
import { Contactus } from './contactus/contactus';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [Landingpage, NewBeasts, Aboutus, Contactus],
  template: `
    <app-landingpage></app-landingpage>
    <app-new-beasts></app-new-beasts>
    <app-aboutus></app-aboutus>
    <app-contactus></app-contactus>
  `
})
export class HomeContent {

}
