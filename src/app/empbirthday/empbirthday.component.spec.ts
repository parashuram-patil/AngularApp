import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpbirthdayComponent } from './empbirthday.component';

describe('EmpbirthdayComponent', () => {
  let component: EmpbirthdayComponent;
  let fixture: ComponentFixture<EmpbirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpbirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpbirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
