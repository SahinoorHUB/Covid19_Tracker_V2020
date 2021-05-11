import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-covid19india',
  templateUrl: './covid19india.component.html',
  styleUrls: ['./covid19india.component.css']
})
export class Covid19indiaComponent implements OnInit {

  isIndiaResolver: any;
  @Input() confirmedCasesIndian: any;
  @Input() IndiaTotalregionalData: any;
  @Input() IndiaTotalregionalMapData: any;
  @Input() deaths: any;
  @Input() discharged: any;

  isTimelineIndiaResolver: any;
  @Input() timelineIndian: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isIndiaResolver = this.route.snapshot.data.isIndia;
    // console.log(this.isIndiaResolver); // Show All Data
    if (typeof(this.isIndiaResolver) === 'object'  ) {
        // console.log(this.isIndiaResolver.lastOriginUpdate); // Show Last data update date & time

        // console.log(this.isIndiaResolver.data.summary); // Show india total cases
        this.confirmedCasesIndian = this.isIndiaResolver.data.summary.confirmedCasesIndian;
        this.deaths = this.isIndiaResolver.data.summary.deaths;
        this.deaths = this.isIndiaResolver.data.summary.deaths;
        this.discharged = this.isIndiaResolver.data.summary.discharged;

        // console.log(this.isIndiaResolver.data.regional); // show india regional data
        this.IndiaTotalregionalData = this.isIndiaResolver.data.regional;
        this.IndiaTotalregionalMapData = this.isIndiaResolver.data.regional;
    }

    this.isTimelineIndiaResolver = this.route.snapshot.data.isIndiaTimeline;
    // console.log(this.isTimelineIndiaResolver);
    if (typeof(this.isTimelineIndiaResolver) === 'object'  ) {
      this.timelineIndian = this.isTimelineIndiaResolver;
    }
  }

}
