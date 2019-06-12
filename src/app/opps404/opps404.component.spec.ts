import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opps404Component } from './opps404.component';

describe('Opps404Component', () => {
  let component: Opps404Component;
  let fixture: ComponentFixture<Opps404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opps404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opps404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
