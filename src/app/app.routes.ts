import { Routes } from '@angular/router';
import { EnergyProductDetailsComponent } from './components/energy-product-details/energy-product-details.component';
import { EnergyProductsComponent } from './components/energy-products/energy-products.component';


export const routes: Routes = [
    {path: 'products', component: EnergyProductsComponent},
    {path: 'products/:link', component: EnergyProductDetailsComponent},
];
