import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-redional-data-map',
  templateUrl: './redional-data-map.component.html',
  styleUrls: ['./redional-data-map.component.css']
})
export class RedionalDataMapComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() IregionalMapData: any;
  Indiaregionalrecord = '';

  states_data = [['State', 'COVID-Deceased Cases']];
  response: any[] = [];
  mapReady = false;

  public geoChart: GoogleChartInterface = {
    chartType: 'GeoChart',
    dataTable: this.states_data,
    options: {
      region: 'IN', // INDIA
      colorAxis: {colors: ['#ffbaba', '#ff7b7b', '#ff5252', '#ff0000', '#a70000']},
      resolution: 'provinces',
      backgroundColor: '#00000',
      datalessRegionColor: '#00000',
      defaultColor: '#00000',
      // height: 600,
    }
  };

  ngOnInit() {
  }

  ngOnChanges() {
    try {
      this.Indiaregionalrecord = this.IregionalMapData;
      // console.log(this.Indiaregionalrecord);
      for (let state of this.Indiaregionalrecord){
        // console.log(state['loc']);
        // console.log(Number(state['deaths']));
        let temp = [state['loc'], Number(state['deaths'])];
        if( state['loc'] == "Odisha"){
          temp = ['IN-OR', Number(state['deaths'])];
        }
        this.states_data.push(temp);
      }
      this.mapReady = true;
    } catch (ex) {
      // window.alert(ex);
    }
  }

}
