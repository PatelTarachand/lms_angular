import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdmissionListComponent } from './all-admission-list.component';

describe('AllAdmissionListComponent', () => {
  let component: AllAdmissionListComponent;
  let fixture: ComponentFixture<AllAdmissionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAdmissionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAdmissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
