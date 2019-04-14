import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isJobSeeker = false;
  isAdmin = false;
  constructor(private layoutService: LayoutService, private router: Router) {
    const jobSeekerFound = window.location.href.split('/')[window.location.href.split('/').length - 1].search('job-seeker');
    if (jobSeekerFound !== -1) {
      this.isJobSeeker = true;
    }
    const isAdmin = window.location.href.search('admin');
    if (isAdmin !== -1) {
      this.isAdmin = true;
    }
  }

  ngOnInit() {
  }

  openSideNav() {
    this.layoutService.sideNavOpened = true;
  }

  switchUser() {
    if (this.isJobSeeker) {
      this.isJobSeeker = false;
      setTimeout(() => {
        this.router.navigateByUrl('/job-provider');
      }, 100);
    } else {
      this.isJobSeeker = true;
      setTimeout(() => {
        this.router.navigateByUrl('/job-seeker');
      }, 100);
    }
  }

  postJob() {
    this.router.navigateByUrl('/job-provider/add-jobs');
  }

  allPubJobs() {
    this.router.navigateByUrl('/job-provider/publish-jobs');
  }
}
