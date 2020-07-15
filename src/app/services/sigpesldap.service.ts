import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class SigpesldapService {
  private URL = environment.urlSerLocoal;

  constructor(
    private httpClient: HttpClient
  ) { }

  // getCPFSaram(valor: any): Observable<HttpResponse<Config>> {
  //   // const headers = new Headers();
  //   // headers.append('Content-Type', 'application/json');
  //   return this.httpClient.get<Config>(
  //     `${this.URL}/api/v1/login/consulta/${valor}`, {observe: 'response'}
  //     );
  // }
  getCPFSaram(valor: any): Observable<any> {
    return this.httpClient.get(`${this.URL}/api/v1/login/consulta/${valor}`, {observe: 'response'})
    .pipe(
      map(res => res),
      // tslint:disable-next-line: deprecation
      catchError((error: any) => Observable.throw(error))
    );
  }

}
