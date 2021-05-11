import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-redional-data',
  templateUrl: './redional-data.component.html',
  styleUrls: ['./redional-data.component.css']
})
export class RedionalDataComponent implements OnInit, OnChanges {

  @Input() IregionalData: any;
  Indiaregionalrecord = '';
  term: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    try {
      this.Indiaregionalrecord = this.IregionalData;
      // console.log(this.Indiaregionalrecord);
    } catch (ex) {
      // window.alert(ex);
    }
  }

}
