import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IndiaDetailsService } from 'src/app/services/india-details/india-details.service';

@Injectable({
  providedIn: 'root'
})
export class IndiaresolverService {

  constructor(private indiasummary: IndiaDetailsService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      return this.indiasummary.indiaDetailsData();
    } catch (ex) {
      return false;
    }
  }
}
