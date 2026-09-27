import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularPoojas } from './popular-poojas';

describe('PopularPoojas', () => {
  let component: PopularPoojas;
  let fixture: ComponentFixture<PopularPoojas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularPoojas],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularPoojas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
