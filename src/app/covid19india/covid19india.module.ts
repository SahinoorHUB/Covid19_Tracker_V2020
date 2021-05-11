import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Covid19indiaRoutingModule } from './covid19india-routing.module';
import { Covid19indiaComponent } from './covid19india.component';
import { Covid19indiaindexComponent } from './covid19indiaindex/covid19indiaindex.component';
import { RedionalDataComponent } from './redional-data/redional-data.component';
import { RedionalDataMapComponent } from './redional-data-map/redional-data-map.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { TimelineConfirmedCasesComponent } from './timeline-confirmed-cases/timeline-confirmed-cases.component';

@NgModule({
  declarations: [Covid19indiaComponent, Covid19indiaindexComponent,
                  RedionalDataComponent, RedionalDataMapComponent, TimelineConfirmedCasesComponent, ],
  imports: [
    CommonModule,
    Covid19indiaRoutingModule,
    Ng2GoogleChartsModule,
    Ng2SearchPipeModule,
    FormsModule,
  ]
})
export class Covid19indiaModule { }
