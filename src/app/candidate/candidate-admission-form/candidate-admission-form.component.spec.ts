import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateAdmissionFormComponent } from './candidate-admission-form.component';

describe('CandidateAdmissionFormComponent', () => {
  let component: CandidateAdmissionFormComponent;
  let fixture: ComponentFixture<CandidateAdmissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateAdmissionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateAdmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
