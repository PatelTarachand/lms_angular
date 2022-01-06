import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { ProfessionalInstructureComponent } from './professional-instructure/professional-instructure.component';
import { routing } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, } from '@angular/material/sidenav';
import { MatIconModule, } from '@angular/material/icon';
import { MatListModule, } from '@angular/material/list';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { AllAdmissionListComponent } from './super-admin/all-admission-list/all-admission-list.component';
import { AllAdmissionRequestListComponent } from './super-admin/all-admission-request-list/all-admission-request-list.component';
import { AdminCandidateProfileComponent } from './super-admin/admin-candidate-profile/admin-candidate-profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CandiateListCoursewiseComponent } from './super-admin/candiate-list-coursewise/candiate-list-coursewise.component';
import { CandiateStatusCoursewiseComponent } from './super-admin/candiate-status-coursewise/candiate-status-coursewise.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SuperAdminComponent, AdminLoginComponent, DashboardManagerComponent, ProfessionalInstructureComponent,
    AllAdmissionListComponent, AllAdmissionRequestListComponent, AdminCandidateProfileComponent, CandiateListCoursewiseComponent, 
    CandiateStatusCoursewiseComponent],
  imports: [
    CommonModule,
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
    routing,
    HttpClientModule,
    NgxPaginationModule,
    MatCheckboxModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatInputModule
  ]
})
export class AdminModule {
  constructor() {
    console.log('Admin Module loaded');
  }
}
