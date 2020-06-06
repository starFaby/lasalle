import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListestudianteComponent } from './listestudiante.component';

describe('ListestudianteComponent', () => {
  let component: ListestudianteComponent;
  let fixture: ComponentFixture<ListestudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListestudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
