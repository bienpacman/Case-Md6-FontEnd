import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerManagementComponent } from './seller-management.component';

describe('SellerManagementComponent', () => {
  let component: SellerManagementComponent;
  let fixture: ComponentFixture<SellerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
