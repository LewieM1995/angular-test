import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyProductDetailsComponent } from './energy-product-details.component';

describe('EnergyProductDetailsComponent', () => {
  let component: EnergyProductDetailsComponent;
  let fixture: ComponentFixture<EnergyProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyProductDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnergyProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
