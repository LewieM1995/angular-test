import { Component } from '@angular/core';


import { HeaderComponent } from './components/header/header.component';
import { EnergyProductsComponent } from './components/energy-products/energy-products.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, EnergyProductsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClientModule]
})
export class AppComponent {
  
}
