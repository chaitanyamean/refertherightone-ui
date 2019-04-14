import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { JobProviderComponent } from './job-provider.component';
import { JobProviderRoutingModule } from './job-provider-rotuing.module';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { PublishedJobsComponent } from './published-jobs/published-jobs.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { EditorModule } from '@tinymce/tinymce-angular';


import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TagsResolver } from './add-jobs/tags-resolvers.service';

@NgModule({
  declarations: [
    JobProviderComponent,
    AddJobsComponent,
    PublishedJobsComponent
  ],
  imports: [
    BrowserModule,
    JobProviderRoutingModule,
    SharedModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    CKEditorModule,
    EditorModule
  ],
  providers: [TagsResolver]
})
export class JobProviderModule { }
