import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCandidateProfileComponent } from './admin-candidate-profile.component';

describe('AdminCandidateProfileComponent', () => {
  let component: AdminCandidateProfileComponent;
  let fixture: ComponentFixture<AdminCandidateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCandidateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCandidateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
