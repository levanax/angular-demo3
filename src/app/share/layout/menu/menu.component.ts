import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  template: `<p>menu works!</p>
            <p-menu [model]="items"></p-menu>`,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() {}
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      { label: '产品管理', icon: 'pi pi-fw pi-plus' },
      { label: '产品库存', icon: 'pi pi-fw pi-download' },
      { label: '库存记录', icon: 'pi pi-fw pi-refresh' }
    ];
  }
}
