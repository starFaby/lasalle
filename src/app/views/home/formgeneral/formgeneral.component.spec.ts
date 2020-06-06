import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgeneralComponent } from './formgeneral.component';

describe('FormgeneralComponent', () => {
  let component: FormgeneralComponent;
  let fixture: ComponentFixture<FormgeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormgeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
