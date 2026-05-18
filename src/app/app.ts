import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Home } from './home/home';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    ngOnInit(): void {
    AOS.init();
}
}