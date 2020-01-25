import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCongeesComponent } from './add-congees.component';

describe('AddCongeesComponent', () => {
  let component: AddCongeesComponent;
  let fixture: ComponentFixture<AddCongeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCongeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCongeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
