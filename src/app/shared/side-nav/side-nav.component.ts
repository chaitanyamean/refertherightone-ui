import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  role = 'job-seeker';
  constructor(public layoutService: LayoutService) {
    let roleFound = window.location.href.search('job-provider');
    if (roleFound !== -1) {
      this.role = 'job-provider';
    }
    roleFound = window.location.href.search('admin');
    if (roleFound !== -1) {
      this.role = 'admin';
    }
  }

  ngOnInit() {
  }

  closeSideNav() {
    this.layoutService.sideNavOpened = false;
  }

}
