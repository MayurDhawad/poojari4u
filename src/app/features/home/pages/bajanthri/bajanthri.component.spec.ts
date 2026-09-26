/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BajanthriComponent } from './bajanthri.component';

describe('BajanthriComponent', () => {
  let component: BajanthriComponent;
  let fixture: ComponentFixture<BajanthriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajanthriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajanthriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
