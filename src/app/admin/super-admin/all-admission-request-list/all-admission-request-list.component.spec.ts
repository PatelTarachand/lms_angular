import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdmissionRequestListComponent } from './all-admission-request-list.component';

describe('AllAdmissionRequestListComponent', () => {
  let component: AllAdmissionRequestListComponent;
  let fixture: ComponentFixture<AllAdmissionRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAdmissionRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAdmissionRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
