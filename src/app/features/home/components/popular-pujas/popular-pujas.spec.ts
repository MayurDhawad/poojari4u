import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularPujas } from './popular-pujas';

describe('PopularPujas', () => {
  let component: PopularPujas;
  let fixture: ComponentFixture<PopularPujas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularPujas],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularPujas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
