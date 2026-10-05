/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BajanthriRegistrationFlowComponent } from './bajanthri-registration-flow.component';

describe('BajanthriRegistrationFlowComponent', () => {
  let component: BajanthriRegistrationFlowComponent;
  let fixture: ComponentFixture<BajanthriRegistrationFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajanthriRegistrationFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajanthriRegistrationFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
