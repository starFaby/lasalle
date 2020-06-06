import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormestudianteComponent } from './formestudiante.component';

describe('FormestudianteComponent', () => {
  let component: FormestudianteComponent;
  let fixture: ComponentFixture<FormestudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormestudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
