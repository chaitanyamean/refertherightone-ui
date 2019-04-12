import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  userDetails = {
    email: '',
    password: ''
  };
  constructor(private toastr: ToastrService,
              private userService: UserserviceService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.login(this.userDetails).subscribe(data => {
      const resObj: any = data;
      if (resObj.status === 200) {
        this.toastr.success(resObj.result.name, 'Welcome');
        this.router.navigate(['/job-seeker']);
        console.log(data);
      }
    });
 }

}
