import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JobSeekerComponent } from './job-seeker.component';
import { SharedModule } from '../shared/shared.module';
import { JobSeekerRoutingModule } from './job-seeker-routing.module';

@NgModule({
  declarations: [
    JobSeekerComponent
  ],
  imports: [
    BrowserModule,
    JobSeekerRoutingModule,
    SharedModule
  ],
  providers: []
})
export class JobSeekerModule { }
