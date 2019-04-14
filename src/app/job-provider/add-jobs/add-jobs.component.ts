import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../provider.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.scss']
})
export class AddJobsComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  jobDetails = {
    title: '',
    description: '',
    skills: [],
    companyMail: '',
    experienceFrom: '',
    experienceTo: '',
    userId: '',
    name: '',
    city: '',
    isApproved: false
  };

  constructor(private route: ActivatedRoute, private toastr: ToastrService,
              private jobService: ProviderService, private router: Router) {
   }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
       console.log(data);
       this.dropdownList = data.tags.result;
       console.log(data.tags.result);
      });
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'itemId',
      textField: 'tags',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 9,
      allowSearchFilter: true
    };
  }

  onChange($event: any): void {
    console.log('onChange');
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  addJob() {

    this.jobDetails.name = localStorage.getItem('name');
    this.jobDetails.userId = localStorage.getItem('userId');
    this.jobService.postJob(this.jobDetails).subscribe(data => {
      const resObj: any = data;
      if (resObj.status === 200) {
        this.toastr.success(resObj.message, 'Your job post ahs been sent to admin for verification');
        this.router.navigate(['/job-seeker']);
      }
      console.log(data);
    });

  }

}
