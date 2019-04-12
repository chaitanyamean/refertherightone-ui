import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { JobProviderComponent } from './job-provider.component';
import { JobProviderRoutingModule } from './job-provider-rotuing.module';

@NgModule({
  declarations: [
    JobProviderComponent
  ],
  imports: [
    BrowserModule,
    JobProviderRoutingModule,
    SharedModule
  ],
  providers: []
})
export class JobProviderModule { }
