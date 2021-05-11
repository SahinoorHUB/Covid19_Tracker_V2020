import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeindexComponent } from './homeindex/homeindex.component';
import { WorldLiveDataComponent } from './homeindex/world-live-data/world-live-data.component';
import { HeadlineComponent } from './homeindex/headline/headline.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { WorldCasesComparisonComponent } from './homeindex/world-cases-comparison/world-cases-comparison.component';
import { MatStepperModule } from '@angular/material/stepper';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { PreventionComponent } from './homeindex/world-cases-comparison/prevention/prevention.component';

@NgModule({
  declarations: [HomeComponent,
      HomeindexComponent,
      WorldLiveDataComponent,
      HeadlineComponent,
      WorldCasesComparisonComponent,
      PreventionComponent,
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Ng2GoogleChartsModule,
    MatStepperModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  exports: [
    MatStepperModule,
  ]
})
export class HomeModule { }
