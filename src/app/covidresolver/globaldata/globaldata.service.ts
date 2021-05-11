import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { WorldDetailsService } from 'src/app/services/world-details/world-details.service';

@Injectable({
  providedIn: 'root'
})
export class GlobaldataService implements Resolve<any> {

  constructor(private globaldata: WorldDetailsService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      return this.globaldata.worldDetailsData();
    } catch (ex) {
      return false;
    }
  }
}
 