import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeindexComponent } from './home/homeindex/homeindex.component';
import { AboutModule } from './about/about.module';


const routes: Routes = [
  {
    path: 'global',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module')
      .then(m => m.AboutModule),
  },
  {
    path: 'covid19india',
    loadChildren: () => import('./covid19india/covid19india.module')
      .then(m => m.Covid19indiaModule),
  },
  { path: '', redirectTo: 'global', pathMatch: 'full' },
  { path: '**', redirectTo: 'global' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
