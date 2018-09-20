import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import G2 from '@antv/g2/lib/core';
import '@antv/g2/lib/geom/interval';

import { ChartProps } from '@antv/g2/src/index';

/**
 * https://github.com/antvis/g2/issues/579
 * g2 按需引入参考 lib/index.js 文件
 */
@Component({
  selector: 'app-store-summary-chart',
  templateUrl: './store-summary-chart.component.html',
  styleUrls: ['./store-summary-chart.component.css']
})
export class StoreSummaryChartComponent implements OnInit {
  constructor() {}

  @ViewChild('chart')
  private chart: ElementRef;

  ngOnInit() {}
  ngAfterViewInit() {
    let chartEl = this.chart.nativeElement;
    const data: any = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 }
    ];
    // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
    // Step 1: 创建 Chart 对象
    let chartProps: ChartProps = {
      container: chartEl,
      forceFit: true,
      height: 300
    };
    G2.track(false);
    const chart = new G2.Chart(chartProps);
    // Step 2: 载入数据源
    chart.source(data);
    // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart
      .interval()
      .position('genre*sold')
      .color('genre');
    // Step 4: 渲染图表
    chart.render();
  }
}
