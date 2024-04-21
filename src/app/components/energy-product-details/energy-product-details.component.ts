import { Component, OnInit } from '@angular/core';
import { EnergyProducts } from '../../../../services/energy-products.interface';
import { EnergyProductsService } from '../../../../services/energy-products.service';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-energy-product-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent, HttpClientModule],
  templateUrl: './energy-product-details.component.html',
  styleUrl: './energy-product-details.component.css',
  providers: [EnergyProductsService]
})

export class EnergyProductDetailsComponent implements OnInit {
  
  product: EnergyProducts | null = null;
  textColor: string = 'White';
  color: string = 'Black';

  constructor(
    private route: ActivatedRoute, 
    private EnergyProductsService: EnergyProductsService,
    private router: Router
  ) { };

  ngOnInit(): void {
    const link = history.state.link;

    console.log('LINK:', link);

    if (link){
      this.EnergyProductsService.getEnergyProductByLink(link).subscribe((product: EnergyProducts) => {
        console.log(product);
        this.product = product;
      });
    }
  }

  prevPage() {
    this.router.navigate(['/products'], { relativeTo: this.route });
  }

}
