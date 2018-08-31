import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRecordsComponent } from './store-records.component';

describe('StoreRecordsComponent', () => {
  let component: StoreRecordsComponent;
  let fixture: ComponentFixture<StoreRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
