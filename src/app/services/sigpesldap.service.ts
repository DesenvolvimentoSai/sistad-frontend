import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

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
    return this.http.get(`${this.URL}/api/v1/login/consulta/${valor}`, {observe: 'response'}).pipe(
      map(res => res)
    );
  }
  // getBooks(): Observable<Book[]> {
  //   this.setBooks();
  //   console.log('BooksService.getBooks() called');
  //   return this.books$.pipe(catchError((error: any) => Observable.throw(error.json())));
  // }

  // private setBooks(): void {
  //   this.books$ = this.booksCollection.snapshotChanges().pipe(
  //     map(actions => actions.map(action => {
  //       const data = action.payload.doc.data() as Book;
  //       const id = action.payload.doc.id;
  //       return { id, ...data };
  //     }))
  //   );
  // }

}
