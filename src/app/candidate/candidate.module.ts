import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';
import { CandidateAdmissionFormComponent } from './candidate-admission-form/candidate-admission-form.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { PreviewAdmissionFormComponent } from './preview-admission-form/preview-admission-form.component';
import { AdmissionFormService } from '../candidate/admission-form.service';
import { routing } from '../app-routing.module';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CandidateProfileDetailsComponent } from './candidate-profile-details/candidate-profile-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { CandidateHomeComponent } from './candidate-home/candidate-home.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { PreviewFormService } from './preview-form.service';
import { CaptchaService } from './captcha.service';
import { LoginService } from './login.service';
import { CandidateProfileDetailsService } from './candidate-profile-details.service'

@NgModule({
  declarations: [
    CandidateLoginComponent,
    CandidateAdmissionFormComponent,
    CandidateProfileComponent,
    PreviewAdmissionFormComponent,
    CandidateDashboardComponent,
    CandidateProfileDetailsComponent,
    CandidateHomeComponent,
    CaptchaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatBadgeModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MDBBootstrapModule,
    MatTabsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatInputModule,
    routing,
  ],
  exports: [CandidateAdmissionFormComponent, PreviewAdmissionFormComponent, CaptchaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AdmissionFormService, PreviewFormService, CaptchaService, LoginService,
    CandidateProfileDetailsService, ] ,
})
export class CandidateModule {
  constructor() {
    console.log('Admin Module loaded');
  }
 }
