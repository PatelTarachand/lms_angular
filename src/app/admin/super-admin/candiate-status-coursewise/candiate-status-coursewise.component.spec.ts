import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandiateStatusCoursewiseComponent } from './candiate-status-coursewise.component';

describe('CandiateStatusCoursewiseComponent', () => {
  let component: CandiateStatusCoursewiseComponent;
  let fixture: ComponentFixture<CandiateStatusCoursewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandiateStatusCoursewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandiateStatusCoursewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
