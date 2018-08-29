import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreEditStep2Component } from './store-edit-step2.component';

describe('StoreEditStep2Component', () => {
  let component: StoreEditStep2Component;
  let fixture: ComponentFixture<StoreEditStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreEditStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreEditStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
