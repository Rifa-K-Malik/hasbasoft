import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateddComponent } from './datedd.component';

describe('DateddComponent', () => {
  let component: DateddComponent;
  let fixture: ComponentFixture<DateddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
