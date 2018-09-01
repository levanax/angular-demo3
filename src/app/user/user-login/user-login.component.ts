import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginID: string;
  password: string;
  constructor(private userService: UserService, private router: Router) {
    this.loginID = 'levan';
    this.password = '123456';
  }

  ngOnInit() {}
  doLogin() {
    let data = {
      loginID: this.loginID,
      password: this.password
    };
    this.userService.login(data).subscribe(
      data => {
        console.debug(data);
        if (this.userService.redirectUrl) {
          this.router.navigateByUrl(this.userService.redirectUrl);
          delete this.userService.redirectUrl;
        } else {
          this.router.navigateByUrl('store/list');
        }
      },
      err => {}
    );
  }
}
