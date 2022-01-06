import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAdmissionFormComponent } from './preview-admission-form.component';

describe('PreviewAdmissionFormComponent', () => {
  let component: PreviewAdmissionFormComponent;
  let fixture: ComponentFixture<PreviewAdmissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewAdmissionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAdmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
