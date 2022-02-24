import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DabAdditionComponent } from './dab-addition.component';

describe('DabAdditionComponent', () => {
  let component: DabAdditionComponent;
  let fixture: ComponentFixture<DabAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DabAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DabAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
