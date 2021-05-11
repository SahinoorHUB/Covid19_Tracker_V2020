import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_rangeSelector from '@amcharts/amcharts4/plugins/rangeSelector';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-timeline-confirmed-cases',
  templateUrl: './timeline-confirmed-cases.component.html',
  styleUrls: ['./timeline-confirmed-cases.component.css']
})
export class TimelineConfirmedCasesComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() indTimeline: any;
  showTimelineData = '';

  ngOnInit() {
    let chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.padding(0, 15, 0, 15);
    chart.colors.step = 3;

    let data = [];
    let price1 = 1000;
    let price2 = 2000;
    let price3 = 3000;
    let quantity = 1000;
    for (var i = 15; i < 3000; i++) {
      price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
      price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
      price3 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);

      if (price1 < 100) {
        price1 = 100;
      }

      if (price2 < 100) {
        price2 = 100;
      }

      if (price3 < 100) {
        price3 = 100;
      }

      quantity += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 500);

      if (quantity < 0) {
        quantity *= -1;
      }
      data.push({ date: new Date(2020, 0, i), price1: price1, price2:price2, price3:price3, quantity: quantity });
    }


    chart.data = data;
    // the following line makes value axes to be arranged vertically.
    chart.leftAxesContainer.layout = 'vertical';

    // uncomment this line if you want to change order of axes
    // chart.bottomAxesContainer.reverseOrder = true;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.ticks.template.length = 8;
    dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = false;
    dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
    dateAxis.renderer.minLabelPosition = 0.01;
    dateAxis.renderer.maxLabelPosition = 0.99;
    dateAxis.keepSelection = true;

    dateAxis.groupData = true;
    dateAxis.minZoomCount = 5;

    // these two lines makes the axis to be initially zoomed-in
    // dateAxis.start = 0.7;
    // dateAxis.keepSelection = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.zIndex = 1;
    valueAxis.renderer.baseGrid.disabled = true;
    // height of axis
    valueAxis.height = am4core.percent(65);

    valueAxis.renderer.gridContainer.background.fill = am4core.color('#000000');
    valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.verticalCenter = 'bottom';
    valueAxis.renderer.labels.template.padding(2, 2, 2, 2);

    // valueAxis.renderer.maxLabelPosition = 0.95;
    valueAxis.renderer.fontSize = '0.8em'

    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.dateX = 'date';
    series1.dataFields.valueY = 'price1';
    series1.dataFields.valueYShow = 'changePercent';
    series1.tooltipText = '{name}: {valueY.changePercent.formatNumber(\'[#0c0]+#.00|[#c00]#.##|0\')}%';
    series1.name = 'Confirmed Cases';
    series1.tooltip.getFillFromObject = false;
    series1.tooltip.getStrokeFromObject = true;
    series1.tooltip.background.fill = am4core.color('#fff');
    series1.tooltip.background.strokeWidth = 2;
    series1.tooltip.label.fill = series1.stroke;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = 'date';
    series2.dataFields.valueY = 'price2';
    series2.dataFields.valueYShow = 'changePercent';
    series2.tooltipText = '{name}: {valueY.changePercent.formatNumber(\'[#0c0]+#.00|[#c00]#.##|0\')}%';
    series2.name = 'Deceased Cases';
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.getStrokeFromObject = true;
    series2.tooltip.background.fill = am4core.color('#fff');
    series2.tooltip.background.strokeWidth = 2;
    series2.tooltip.label.fill = series2.stroke;

    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.dateX = 'date';
    series3.dataFields.valueY = 'price3';
    series3.dataFields.valueYShow = 'changePercent';
    series3.tooltipText = '{name}: {valueY.changePercent.formatNumber(\'[#0c0]+#.00|[#c00]#.##|0\')}%';
    series3.name = 'Discharged Cases';
    series3.tooltip.getFillFromObject = false;
    series3.tooltip.getStrokeFromObject = true;
    series3.tooltip.background.fill = am4core.color('#fff');
    series3.tooltip.background.strokeWidth = 2;
    series3.tooltip.label.fill = series3.stroke;

    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.tooltip.disabled = true;
    // height of axis
    valueAxis2.height = am4core.percent(35);
    valueAxis2.zIndex = 3;
    // this makes gap between panels
    valueAxis2.marginTop = 30;
    valueAxis2.renderer.baseGrid.disabled = true;
    valueAxis2.renderer.inside = true;
    valueAxis2.renderer.labels.template.verticalCenter = 'bottom';
    valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
    // valueAxis.renderer.maxLabelPosition = 0.95;
    valueAxis2.renderer.fontSize = '0.8em';

    valueAxis2.renderer.gridContainer.background.fill = am4core.color('#000000');
    valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;

    let volumeSeries = chart.series.push(new am4charts.StepLineSeries());
    volumeSeries.fillOpacity = 1;
    volumeSeries.fill = series1.stroke;
    volumeSeries.stroke = series1.stroke;
    volumeSeries.dataFields.dateX = 'date';
    volumeSeries.dataFields.valueY = 'quantity';
    volumeSeries.yAxis = valueAxis2;
    volumeSeries.tooltipText = 'Volume: {valueY.value}';
    volumeSeries.name = 'Series 2';
    // volume should be summed
    volumeSeries.groupFields.valueY = 'sum';
    volumeSeries.tooltip.label.fill = volumeSeries.stroke;
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series1);
    scrollbarX.marginBottom = 20;
    let sbSeries = scrollbarX.scrollbarChart.series.getIndex(0);
    sbSeries.dataFields.valueYShow = undefined;
    chart.scrollbarX = scrollbarX;

    // Add range selector
    let selector = new am4plugins_rangeSelector.DateAxisRangeSelector();
    selector.container = document.getElementById('controls');
    selector.axis = dateAxis;
  }

  ngOnChanges() {
    try {
      this.showTimelineData = this.indTimeline;
      console.log(this.showTimelineData);
    } catch (ex) {
      // window.alert(ex);
    }
  }

}
