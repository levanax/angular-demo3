import { Component, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { MissionInteractionService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo3';
  showMenuTools: boolean = false;
  constructor(private missionInteractionService: MissionInteractionService) {
    missionInteractionService.showMenuTools$.subscribe(
      show => {
        console.debug('Msg: ' + show);
        this.showMenuTools = show;
      },
      err => {
        console.log(err);
      }
    );
  }
}
