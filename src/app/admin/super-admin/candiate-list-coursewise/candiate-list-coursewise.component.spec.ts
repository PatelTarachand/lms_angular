import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandiateListCoursewiseComponent } from './candiate-list-coursewise.component';

describe('CandiateListCoursewiseComponent', () => {
  let component: CandiateListCoursewiseComponent;
  let fixture: ComponentFixture<CandiateListCoursewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandiateListCoursewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandiateListCoursewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
