import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';


@Injectable()
export class SigpesService {
  private URL = environment.urlSerLocoal;

  constructor(
    private http: HttpClient
  ) {}

  getCPFSaram(valor: any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const params = new HttpParams().set('valor', valor);
    console.log('To no service');
    console.log(this.http.get(`${this.URL}/api/v1/login/consulta/`));

    return this.http.get(`${this.URL}/api/v1/login/consulta/`);
  }

}
