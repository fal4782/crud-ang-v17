import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl = 'assets/countries.json';

  constructor(private http: HttpClient) {}

  // Method to get the complete countries data
  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
