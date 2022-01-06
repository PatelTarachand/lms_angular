import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule, WavesModule, ButtonsModule,
  MDBBootstrapModule, DropdownModule  } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CandidateModule } from './candidate/candidate.module';
// import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule,  } from '@angular/material/sidenav';
import { MatIconModule,  } from '@angular/material/icon';
import { MatListModule,  } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { CandidateRegistrationLayoutComponent } from './candidate-registration-layout/candidate-registration-layout.component';
import { CandidateLayoutComponent } from './candidate-layout/candidate-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    StudentHeaderComponent,
    CandidateRegistrationLayoutComponent,
    CandidateLayoutComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   // CandidateModule,
   // AdminModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
    MatExpansionModule,
    MatDialogModule,
    MatCheckboxModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NavbarModule, WavesModule,ButtonsModule,MDBBootstrapModule.forRoot(),DropdownModule.forRoot(), BrowserAnimationsModule,
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
