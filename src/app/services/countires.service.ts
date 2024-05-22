import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountiresService {
  constructor(private http: HttpClient) {}

  getAllCountries(url: string) {
    console.log('url', url);

    return this.http.get(
      'https://usedcarsapi.mdndevs.com/api/v1/metadata/countries?page=1&limit=20'
    );
  }
}
