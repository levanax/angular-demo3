import { Component, OnInit } from '@angular/core';
import { Store, StoreService } from '../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.refreshList();
  }
  stores: Store[];
  refreshList() {
    this.storeService.getStores().subscribe(res => {
      if (res.code === 'ok') {
        this.stores = res.data;
      }
    });
  }
  handleNewStore(event) {
    this.router.navigateByUrl('store/edit/step1');
  }
}
