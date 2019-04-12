import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobSeekerComponent } from './job-seeker.component';

const routes: Routes = [
  { path: 'job-seeker', component: JobSeekerComponent, children: [
    
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { }
