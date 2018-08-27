import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  test: string;
  loginID: string;
  password: string;
  constructor(private userService: UserService) {
    this.loginID = '12';
    this.password = 'adfasdf';
  }

  ngOnInit() {}
  doLogin() {
    let data = {
      loginID: this.loginID,
      password: this.password
    };
    this.userService.login(data);
  }
}
