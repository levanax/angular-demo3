import { Component, OnInit } from '@angular/core';
import { MissionInteractionService, StoreService } from '../../core';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  constructor(private missionInteractionService: MissionInteractionService) {}

  ngOnInit() {
    this.missionInteractionService.showMenuTools(true);
  }
}
