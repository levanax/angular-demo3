import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSummaryChartComponent } from './store-summary-chart.component';

describe('StoreSummaryChartComponent', () => {
  let component: StoreSummaryChartComponent;
  let fixture: ComponentFixture<StoreSummaryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSummaryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSummaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
