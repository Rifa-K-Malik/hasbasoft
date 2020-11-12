import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateppComponent } from './datepp.component';

describe('DateppComponent', () => {
  let component: DateppComponent;
  let fixture: ComponentFixture<DateppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
