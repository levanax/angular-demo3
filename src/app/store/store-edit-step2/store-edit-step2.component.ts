import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-edit-step2',
  templateUrl: './store-edit-step2.component.html',
  styleUrls: ['./store-edit-step2.component.css']
})
export class StoreEditStep2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  doBack(event) {
    this.router.navigateByUrl('store/edit/step1');
  }
  doSubmit(event) {}
}
