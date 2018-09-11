import { Component, OnInit } from '@angular/core';
import { UserService, MissionInteractionService } from '../../core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginID: string;
  password: string;
  loginPasswordInputHide:boolean = true;
  constructor(
    private missionInteractionService: MissionInteractionService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {}
  doLogin() {
    let data = {
      loginID: this.loginID,
      password: this.password
    };
    this.userService.login(data).subscribe(
      res => {
        if (res.code === 'ok') {
          console.debug(res);
          this.missionInteractionService.showMenuTools(true);
          if (this.userService.redirectUrl) {
            this.router.navigateByUrl(this.userService.redirectUrl);
            delete this.userService.redirectUrl;
          } else {
            this.router.navigateByUrl('store/list');
          }
        } else {
          let message: Message = {
            key: 'tc',
            severity: 'error',
            summary: '系统提示',
            detail: '登入名或密码错误！'
          };
          this.missionInteractionService.notification(message);
        }
      },
      err => {}
    );
  }
}
