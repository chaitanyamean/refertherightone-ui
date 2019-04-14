import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobProviderComponent } from './job-provider.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { PublishedJobsComponent } from './published-jobs/published-jobs.component';
import { TagsResolver } from './add-jobs/tags-resolvers.service';

const routes: Routes = [
  { path: 'job-provider', component: JobProviderComponent, children: [
    {path: 'add-jobs', component: AddJobsComponent, resolve: {tags: TagsResolver}},
    {path: 'publish-jobs', component: PublishedJobsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobProviderRoutingModule { }
