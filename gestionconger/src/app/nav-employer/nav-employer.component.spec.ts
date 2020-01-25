import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEmployerComponent } from './nav-employer.component';

describe('NavEmployerComponent', () => {
  let component: NavEmployerComponent;
  let fixture: ComponentFixture<NavEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
