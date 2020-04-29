import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainParticipantComponent } from './main-participant.component';

describe('MainParticipantComponent', () => {
  let component: MainParticipantComponent;
  let fixture: ComponentFixture<MainParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
