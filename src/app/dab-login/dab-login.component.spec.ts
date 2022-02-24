import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DabLoginComponent } from './dab-login.component';

describe('DabLoginComponent', () => {
  let component: DabLoginComponent;
  let fixture: ComponentFixture<DabLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DabLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DabLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
