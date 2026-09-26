/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhyPoojari4uComponent } from './why-poojari4u.component';

describe('WhyPoojari4uComponent', () => {
  let component: WhyPoojari4uComponent;
  let fixture: ComponentFixture<WhyPoojari4uComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyPoojari4uComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyPoojari4uComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
