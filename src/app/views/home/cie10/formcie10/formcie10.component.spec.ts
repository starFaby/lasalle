import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formcie10Component } from './formcie10.component';

describe('Formcie10Component', () => {
  let component: Formcie10Component;
  let fixture: ComponentFixture<Formcie10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formcie10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formcie10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
