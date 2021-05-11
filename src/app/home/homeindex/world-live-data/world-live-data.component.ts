import { Component, OnInit, Input, OnChanges, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { WorldDetailsService } from 'src/app/services/world-details/world-details.service';
declare var google: any;
@Component({
  selector: 'app-world-live-data',
  templateUrl: './world-live-data.component.html',
  styleUrls: ['./world-live-data.component.css']
})
export class WorldLiveDataComponent implements OnInit, OnChanges, AfterViewInit {

  worldConfirmed = '';
  worldDeaths = '';
  worldRecovered = '';

  @Input() appData: any;
  @Input() GDeaths: any;
  @Input() GRecovered: any;

  @ViewChild('barChart', {static: false}) barChart: ElementRef;
  drawChart = () => {
    const data = google.visualization.arrayToDataTable([
      ['Element', 'Density', { role: 'style' } ],
      ['Confirmed', this.worldConfirmed, '#007bff'],
      ['Deaths', this.worldDeaths, '#ff073a'],
      ['Recovered', this.worldRecovered, '#28a745'],
    ]);
    const options = {
      title: 'Show Global Current Data',
      bar: {groupWidth: '100%'},
      legend: { position: 'none'},
      backgroundColor: '#e0e5ec',
      titleTextStyle: { color: '#000' },
    };
    const view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      { calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation' },
      2]);
    const chart = new google.visualization.BarChart(this.barChart.nativeElement);
    chart.draw(view, options);
  }

  constructor(private WorldDetails: WorldDetailsService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    google.charts.load('current', {packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

  ngOnChanges() {
    try {
      // console.log(this.appData);
      this.worldConfirmed = this.appData;
      this.worldDeaths = this.GDeaths;
      this.worldRecovered = this.GRecovered;
    } catch (ex) {
      // window.alert(ex);
    }
  }

}
 