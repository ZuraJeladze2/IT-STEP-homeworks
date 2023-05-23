import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsArrayComponent } from './cards-array.component';

describe('CardsArrayComponent', () => {
  let component: CardsArrayComponent;
  let fixture: ComponentFixture<CardsArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsArrayComponent]
    });
    fixture = TestBed.createComponent(CardsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
