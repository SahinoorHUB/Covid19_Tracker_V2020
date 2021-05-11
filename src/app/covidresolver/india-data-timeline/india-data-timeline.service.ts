import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IndiaTimelineService } from 'src/app/services/india-timeline/india-timeline.service';

@Injectable({
  providedIn: 'root'
})
export class IndiaDataTimelineService {

  constructor(private indiatimelinedata: IndiaTimelineService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      return this.indiatimelinedata.indiaTimeline();
    } catch (ex) {
      return false;
    }
  }
}
