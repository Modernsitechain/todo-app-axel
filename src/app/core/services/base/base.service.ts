import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.BASE_URL.JSONPLACEHOLDER;

  constructor() {}

  protected getAPI<T, R = T>(endpoint: string, params?: T): Observable<R> {
    let httpParams = new HttpParams();

    const url = this.baseUrl + endpoint;

    if (params) {
      Object.keys(params).forEach((key) => {
        const value = (params as any)[key];
        if (value !== null && value !== undefined) {
          httpParams = httpParams.set(key, value);
        }
      });
    }

    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    });

    return this.http.get<R>(url, {
      params: httpParams,
      headers: headers
    });
  }

  protected postAPI<T, R = T>(
    endpoint: string,
    payload: T,
    params?: T
  ): Observable<R> {
    let httpParams = new HttpParams();

    const url = this.baseUrl + endpoint;

    if (params) {
      Object.keys(params).forEach((key) => {
        const value = (params as any)[key];
        if (value !== null && value !== undefined) {
          httpParams = httpParams.set(key, value);
        }
      });
    }

    const headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');

    return this.http.post<R>(url, payload, {
      headers: headers
    });
  }
}
