import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeindexComponent } from './homeindex/homeindex.component';
import { GlobaldataService } from '../covidresolver/globaldata/globaldata.service';
import { WorldsummaryService } from '../covidresolver/worldsummary/worldsummary.service';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
      path: '',
      component: HomeindexComponent,
      pathMatch: 'full',
      resolve: {
          isGlobal: GlobaldataService,
          isdataSummary: WorldsummaryService,
      }
    },
  ],
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [GlobaldataService],
})
export class HomeRoutingModule { }
