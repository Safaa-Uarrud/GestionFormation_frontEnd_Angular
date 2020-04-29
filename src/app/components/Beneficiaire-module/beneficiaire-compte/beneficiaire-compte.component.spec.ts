import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaireCompteComponent } from './beneficiaire-compte.component';

describe('ParticiperFormationComponent', () => {
  let component: BeneficiaireCompteComponent;
  let fixture: ComponentFixture<BeneficiaireCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiaireCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaireCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
