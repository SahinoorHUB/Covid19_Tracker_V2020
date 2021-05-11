import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/core/url/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldTotalDataService {

  constructor(private httpClient: HttpClient) { }

  worldsummary(): Observable<any> {
    return this.httpClient.get<any>(Url.COVID_WORLD_DATA_SUMMARY);
  }
}
