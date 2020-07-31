import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
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
  getCPFSaram(valor: any): Observable<any> {
    return this.httpClient.get(`${this.URL}/api/v1/login/consultaSIGPES/${valor}`, {observe: 'response'})
    .pipe(
      map(res => res),
      // tslint:disable-next-line: deprecation
      catchError((error: any) => Observable.throw(error))
    );
  }
  validarLogin(cpf, senha): Observable<any> {
    let params = new HttpParams();
    params = params.append('cpf', cpf);
    params = params.append('senha', senha);
    return this.httpClient.get(`${this.URL}/api/v1/login/consultaLDAP/`, { params })
    .pipe(
      map(res => res),
      // tslint:disable-next-line: deprecation
      catchError((error: any) => Observable.throw(error))
    );
  }

}
