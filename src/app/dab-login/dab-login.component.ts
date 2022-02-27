import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dab-login',
  templateUrl: './dab-login.component.html',
  styleUrls: ['./dab-login.component.css']
})
export class DabLoginComponent implements OnInit {

  user = new User();
  msg="";

  constructor(
    private userService: UserService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.userService.loginUserFromRemote(this.user).subscribe(
      (data: User) => {
        console.log("response received");
        console.log(data);
        localStorage.setItem('userid', String(data.userId));
        localStorage.setItem('username', data.userName);
        localStorage.setItem('password', data.password);
        localStorage.setItem('role', data.role);

        this.router.navigate(['/dab-appoint'])
      },
      error => {
        console.log("exception occured");
        this.msg = "Bad Credential, Please enter valid user name and password";
      }
    );
  }

}
