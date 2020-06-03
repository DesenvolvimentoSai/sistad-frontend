import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SigpesService {
  private URL = 'localhost:5000';

  constructor(
    private http: HttpClient
  ) {}

  getCPFSaram(valor: any): Observable<any> {
    return this.http.get<any>(`${this.URL}api/v1/login/consulta/${valor}`);
  }
}
