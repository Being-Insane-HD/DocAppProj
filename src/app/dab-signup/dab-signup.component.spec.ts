import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DabSignupComponent } from './dab-signup.component';

describe('DabSignupComponent', () => {
  let component: DabSignupComponent;
  let fixture: ComponentFixture<DabSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DabSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DabSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
