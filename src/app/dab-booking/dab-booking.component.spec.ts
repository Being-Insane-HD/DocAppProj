import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DabBookingComponent } from './dab-booking.component';

describe('DabBookingComponent', () => {
  let component: DabBookingComponent;
  let fixture: ComponentFixture<DabBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DabBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DabBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
