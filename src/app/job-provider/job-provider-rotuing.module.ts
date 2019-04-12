import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobProviderComponent } from './job-provider.component';

const routes: Routes = [
  { path: 'job-provider', component: JobProviderComponent, children: [
    
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobProviderRoutingModule { }
