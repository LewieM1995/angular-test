import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnergyProducts, EnergyProductsResponse } from './energy-products.interface';
import { environment } from '../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnergyProductsService {
  private apiUrl = environment.octopusApiUrl;
  private api_key = environment.octopusApiKey;

  constructor(private http: HttpClient) { }

  getEnergyProducts(): Observable<EnergyProductsResponse> {
    const headers = new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.api_key + ':') 
    });
    return this.http.get<EnergyProductsResponse>(this.apiUrl, {headers: headers});
  };

  getEnergyProductByLink(link: string): Observable<EnergyProducts> {
    const headers = new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.api_key + ':') 
    });
    return this.http.get<EnergyProducts>(link, { headers: headers });
  };
}
