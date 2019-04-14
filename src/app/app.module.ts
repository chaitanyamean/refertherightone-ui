import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { ToastrModule } from 'ngx-toastr';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { JobProviderComponent } from './job-provider/job-provider.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from './shared/shared.module';
import { JobProviderModule } from './job-provider/job-provider.module';
import { JobSeekerModule } from './job-seeker/job-seeker.module';
import { AdminModule } from './admin/admin.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    JobProviderModule,
    JobSeekerModule,
    AdminModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    CKEditorModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgMultiSelectDropDownModule.forRoot(),
    EditorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
