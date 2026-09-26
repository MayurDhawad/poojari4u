/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoojarisComponent } from './poojaris.component';

describe('PoojarisComponent', () => {
  let component: PoojarisComponent;
  let fixture: ComponentFixture<PoojarisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojarisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
