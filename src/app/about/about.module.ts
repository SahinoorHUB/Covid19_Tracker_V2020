import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutindexComponent } from './aboutindex/aboutindex.component';
import { TagAnimationComponent } from './aboutindex/tag-animation/tag-animation.component';


@NgModule({
  declarations: [AboutComponent, AboutindexComponent, TagAnimationComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
