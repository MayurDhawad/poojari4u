/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoojaSamagriComponent } from './pooja-samagri.component';

describe('PoojaSamagriComponent', () => {
  let component: PoojaSamagriComponent;
  let fixture: ComponentFixture<PoojaSamagriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojaSamagriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojaSamagriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
