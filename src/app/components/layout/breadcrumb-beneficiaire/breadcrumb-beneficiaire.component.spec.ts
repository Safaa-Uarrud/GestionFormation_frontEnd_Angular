import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbBenComponent } from './breadcrumb-beneficiaire.component';

describe('BreadcrumbBenComponent', () => {
  let component: BreadcrumbBenComponent;
  let fixture: ComponentFixture<BreadcrumbBenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbBenComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
