import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  template: `<p-menu [model]="items"></p-menu>`,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() {}
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: '产品',
        items: [
          {
            label: '产品列表',
            icon: 'pi pi-fw pi-caret-right',
            routerLink: '/product/list'
          }
        ]
      },
      {
        label: '库存',
        items: [
          {
            label: '库存列表',
            icon: 'pi pi-fw pi-caret-right',
            routerLink: '/store/list'
          },
          {
            label: '库存记录',
            icon: 'pi pi-fw pi-caret-right',
            routerLink: '/store/records'
          },
          {
            label: '库存汇总',
            icon: 'pi pi-fw pi-caret-right',
            routerLink: '/store/summary'
          }
        ]
      }
    ];
  }
}
