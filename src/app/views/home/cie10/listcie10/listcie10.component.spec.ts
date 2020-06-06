import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listcie10Component } from './listcie10.component';

describe('Listcie10Component', () => {
  let component: Listcie10Component;
  let fixture: ComponentFixture<Listcie10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listcie10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listcie10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
