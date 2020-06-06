import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepdfComponent } from './datepdf.component';

describe('DatepdfComponent', () => {
  let component: DatepdfComponent;
  let fixture: ComponentFixture<DatepdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
