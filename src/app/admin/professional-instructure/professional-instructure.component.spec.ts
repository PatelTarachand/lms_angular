import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalInstructureComponent } from './professional-instructure.component';

describe('ProfessionalInstructureComponent', () => {
  let component: ProfessionalInstructureComponent;
  let fixture: ComponentFixture<ProfessionalInstructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalInstructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalInstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
