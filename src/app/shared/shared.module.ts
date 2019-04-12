import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { DataNotAvailableComponent } from './data-not-available/data-not-available.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    LoaderComponent,
    DataNotAvailableComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoaderComponent,
    DataNotAvailableComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ]
})
export class SharedModule { }
