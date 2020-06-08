import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigpesldapService {
  private URL = environment.urlSerLocoal;

  constructor(
    private http: HttpClient
  ) { }

  getCPFSaram(valor: any): Observable<any>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // const option = {
    //   params: new HttpParams().set('valor', valor)
    // };
    // const params = new HttpParams().set('valor', valor);
    return this.http.get(`${this.URL}/api/v1/login/consulta/${valor}`);
  }

}
