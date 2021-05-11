import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homeindex',
  templateUrl: './homeindex.component.html',
  styleUrls: ['./homeindex.component.css']
})
export class HomeindexComponent implements OnInit {
 
  isGlobalResolver: any;
  @Input() ConfirmedData: any;
  @Input() DeathsData: any;
  @Input() RecoveredData: any;

  isGlobalSummaryResolver: any;
  @Input() CountriesData: any;
  dateTime = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isGlobalResolver = this.route.snapshot.data.isGlobal;
    if (typeof(this.isGlobalResolver) === 'object' && 'TotalConfirmed' && 'TotalDeaths' && 'TotalRecovered') {
        this.ConfirmedData = this.isGlobalResolver.TotalConfirmed;
        this.DeathsData = this.isGlobalResolver.TotalDeaths;
        this.RecoveredData = this.isGlobalResolver.TotalRecovered;
        // console.log(this.isGlobalResolver.TotalConfirmed);
        // console.log(this.isGlobalResolver.TotalDeaths);
        // console.log(this.isGlobalResolver.TotalRecovered);
    }

    this.isGlobalSummaryResolver = this.route.snapshot.data.isdataSummary;
    // console.log(this.isGlobalSummaryResolver);
    if (typeof(this.isGlobalSummaryResolver) === 'object' && 'Global' && 'Countries' && 'Date') {
        // console.log(this.isGlobalSummaryResolver.Global);
        // console.log(this.isGlobalSummaryResolver.Date);
        this.dateTime = this.isGlobalSummaryResolver.Date;
        // console.log(this.isGlobalSummaryResolver.Countries);
        this.CountriesData = this.isGlobalSummaryResolver.Countries;
    }
  }



}
