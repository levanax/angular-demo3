import { Component, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { MissionInteractionService } from './core';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo3';
  showMenuTools: boolean = false;
  constructor(
    private missionInteractionService: MissionInteractionService,
    private messageService: MessageService
  ) {
    missionInteractionService.showMenuTools$.subscribe(
      show => {
        console.debug('Msg: ' + show);
        this.showMenuTools = show;
      },
      err => {
        console.log(err);
      }
    );

    missionInteractionService.appNotification$.subscribe((data: Message) => {
      console.log(`Msg:${data.detail}`);
      this.messageService.add(data);
    });
  }
}
