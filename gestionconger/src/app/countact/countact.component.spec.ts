import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountactComponent } from './countact.component';

describe('CountactComponent', () => {
  let component: CountactComponent;
  let fixture: ComponentFixture<CountactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
