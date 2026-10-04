/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoojariRegistrationFlowComponent } from './poojari-registration-flow.component';

describe('PoojariRegistrationFlowComponent', () => {
  let component: PoojariRegistrationFlowComponent;
  let fixture: ComponentFixture<PoojariRegistrationFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojariRegistrationFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojariRegistrationFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
