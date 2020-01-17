import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevexpressComponent } from './devexpress.component';

describe('DevexpressComponent', () => {
  let component: DevexpressComponent;
  let fixture: ComponentFixture<DevexpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevexpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevexpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
