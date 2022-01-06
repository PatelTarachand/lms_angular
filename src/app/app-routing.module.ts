import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateAdmissionFormComponent } from './candidate/candidate-admission-form/candidate-admission-form.component';
import { CandidateDashboardComponent } from './candidate/candidate-dashboard/candidate-dashboard.component';
import { CandidateLoginComponent } from './candidate/candidate-login/candidate-login.component';
import { CandidateProfileDetailsComponent } from './candidate/candidate-profile-details/candidate-profile-details.component';
import { CandidateProfileComponent } from './candidate/candidate-profile/candidate-profile.component';
import { PreviewAdmissionFormComponent } from './candidate/preview-admission-form/preview-admission-form.component';
import { SuperAdminComponent } from './admin/super-admin/super-admin.component';
import { AllAdmissionRequestListComponent } from './admin/super-admin/all-admission-request-list/all-admission-request-list.component';
import { AdminCandidateProfileComponent } from './admin/super-admin/admin-candidate-profile/admin-candidate-profile.component';
import { CandidateHomeComponent } from './candidate/candidate-home/candidate-home.component';
import { CandidateRegistrationLayoutComponent } from './candidate-registration-layout/candidate-registration-layout.component';
import { CandidateLayoutComponent } from './candidate-layout/candidate-layout.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AllAdmissionListComponent } from './admin/super-admin/all-admission-list/all-admission-list.component';
import { CandiateListCoursewiseComponent } from './admin/super-admin/candiate-list-coursewise/candiate-list-coursewise.component';
import { CandiateStatusCoursewiseComponent } from './admin/super-admin/candiate-status-coursewise/candiate-status-coursewise.component';



const routes: Routes = [

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
    .then(m => m.AdminModule)
  },
  {
    path: 'candidate',
    loadChildren: () => import('./candidate/candidate.module')
    .then(m => m.CandidateModule)
  },

  {
    path: '', component: CandidateRegistrationLayoutComponent,
    children: [
      { path: '', redirectTo: '/admission-form', pathMatch: 'full' },
      {
        path: 'admission-form', component: CandidateAdmissionFormComponent
      },
      {
        path: 'previewForm', component: PreviewAdmissionFormComponent
      },
      {
        path: 'candidatelogin', component: CandidateLoginComponent
      },
      {
        path: 'adminlogin', component: AdminLoginComponent
      }
    ]

  },
  {
    path: 'candidatehome', component: CandidateLayoutComponent,
    children: [
      { path: '', component: CandidateDashboardComponent, pathMatch: 'full' },
      {
        path: 'profile', component: CandidateProfileDetailsComponent
      }
    ]
  },
  // Admin Dashboard Routes
  {
    path: 'adminhome', component: AdminLayoutComponent,
    children: [
      { path: '', component: SuperAdminComponent, pathMatch: 'full' },
      {
        path: 'candidate-profile/:id',
        component: AdminCandidateProfileComponent
      },
      {
        path: 'course-wise',
        component: AllAdmissionListComponent
      },
      {
        path: 'status-wise/:status',
        component: CandiateStatusCoursewiseComponent
      },
      {
        path: 'request-list',
        component: AllAdmissionRequestListComponent
      },
      {
        path: 'candidate-list-course-wise/:course_code/:status_id',
        component: CandiateListCoursewiseComponent
      },
    ]
  },
  // { path: '**', redirectTo: '' }
];
export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
