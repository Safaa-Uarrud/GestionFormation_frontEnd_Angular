import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartComponent } from './addCart.component';

describe('AddCartComponent', () => {
  let component: AddCartComponent;
  let fixture: ComponentFixture<AddCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
