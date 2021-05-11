import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Covid19indiaComponent } from './covid19india.component';
import { IndiaresolverService } from '../covidresolver/indiaresolver/indiaresolver.service';
import { IndiaDataTimelineService } from '../covidresolver/india-data-timeline/india-data-timeline.service';


const routes: Routes = [
  {
    path: '',
    component: Covid19indiaComponent,
    resolve: {
      isIndia: IndiaresolverService,
      isIndiaTimeline: IndiaDataTimelineService,
  }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Covid19indiaRoutingModule { }
