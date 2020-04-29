import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuBenComponent } from './navigation-menu-beneficiaire.component';

describe('NavigationMenuBenComponent', () => {
  let component: NavigationMenuBenComponent;
  let fixture: ComponentFixture<NavigationMenuBenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMenuBenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
