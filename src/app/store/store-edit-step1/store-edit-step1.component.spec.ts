import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreEditStep1Component } from './store-edit-step1.component';

describe('StoreEditStep1Component', () => {
  let component: StoreEditStep1Component;
  let fixture: ComponentFixture<StoreEditStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreEditStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreEditStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
