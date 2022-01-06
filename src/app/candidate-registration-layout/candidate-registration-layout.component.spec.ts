import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateRegistrationLayoutComponent } from './candidate-registration-layout.component';

describe('CandidateRegistrationLayoutComponent', () => {
  let component: CandidateRegistrationLayoutComponent;
  let fixture: ComponentFixture<CandidateRegistrationLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateRegistrationLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateRegistrationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
