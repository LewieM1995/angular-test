import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EnergyProductsService } from '../../../../services/energy-products.service'
import { EnergyProducts, EnergyProductsResponse } from '../../../../services/energy-products.interface';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../button/button.component';



@Component({
  selector: 'app-energy-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, ButtonComponent],
  templateUrl: './energy-products.component.html',
  styleUrl: './energy-products.component.css',
  providers: [EnergyProductsService]
})
export class EnergyProductsComponent implements OnInit {

  products: EnergyProducts[] = [];

  constructor(
    private EnergyProductsService: EnergyProductsService, private router : Router
  ) { }

  //On inital load fetching, Services handle fetch logic
  ngOnInit(): void {
    this.EnergyProductsService.getEnergyProducts().subscribe((response: EnergyProductsResponse) => {
      //console.log(response.results)
      this.products = response.results;
    });
  }


  //link to dynamically create product details
  navigateProductDetails(product: EnergyProducts) {
    if (product.links && product.links.length > 0) {
      const link = product.links[0].href;
      this.router.navigate(['/products', product.code], {state: { link: link}});
    }
  }

}
