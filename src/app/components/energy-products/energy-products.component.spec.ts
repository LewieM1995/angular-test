import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyProductsComponent } from './energy-products.component';

describe('EnergyProductsComponent', () => {
  let component: EnergyProductsComponent;
  let fixture: ComponentFixture<EnergyProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnergyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
