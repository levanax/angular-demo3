import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from 'primeng/components/common/message';

/**
 * note: 注意该服务不可使用 module 加载
 */
@Injectable({
  providedIn: 'root'
})
export class MissionInteractionService {
  constructor() {}

  private showMenuToolsSource = new Subject<boolean>();
  showMenuTools$ = this.showMenuToolsSource.asObservable();
  showMenuTools(show: boolean) {
    this.showMenuToolsSource.next(show);
  }

  private appNotificationSource = new Subject<Message>();
  appNotification$ = this.appNotificationSource.asObservable();
  notification(data: Message) {
    this.appNotificationSource.next(data);
  }
}
