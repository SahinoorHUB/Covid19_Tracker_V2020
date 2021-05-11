import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-covid19indiaindex',
  templateUrl: './covid19indiaindex.component.html',
  styleUrls: ['./covid19indiaindex.component.css']
})
export class Covid19indiaindexComponent implements OnInit, OnChanges {

  @Input() ISumData: any;
  @Input() deathsData: any;
  @Input() dischargedData: any;
  indiadeathsData = '';
  indiaconfirmed = '';
  indiadischargedData = '';

  constructor( ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    try {
      this.indiaconfirmed = this.ISumData;
      this.indiadeathsData = this.deathsData;
      this.indiadischargedData = this.dischargedData;
    } catch (ex) {
      // window.alert(ex);
    }
  }

}
