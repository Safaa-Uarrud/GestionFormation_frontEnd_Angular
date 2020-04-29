import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBenComponent } from './header-beneficiaire.component';

describe('HeaderBenComponent', () => {
  let component: HeaderBenComponent;
  let fixture: ComponentFixture<HeaderBenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
