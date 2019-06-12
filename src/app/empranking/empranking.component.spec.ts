import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprankingComponent } from './empranking.component';

describe('EmprankingComponent', () => {
  let component: EmprankingComponent;
  let fixture: ComponentFixture<EmprankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
