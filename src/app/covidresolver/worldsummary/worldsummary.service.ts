import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { WorldTotalDataService } from 'src/app/services/world-total-data/world-total-data.service';

@Injectable({
  providedIn: 'root'
})
export class WorldsummaryService implements Resolve<any> {

  constructor(private globasummary: WorldTotalDataService, ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      return this.globasummary.worldsummary();
    } catch (ex) {
      return false;
    }
  }
}
