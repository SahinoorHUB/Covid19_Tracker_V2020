import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/core/url/url';
import { JsonResponse } from 'src/app/core/observable/json_response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldDetailsService {

  constructor(private httpClient: HttpClient) { }

  worldDetailsData(): Observable<any> {
    return this.httpClient.get<any>(Url.COVID_WORLD_TOTAL);
  }
}
 