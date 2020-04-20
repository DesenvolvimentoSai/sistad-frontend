import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// @Injectable()
export class AuthService {

  //private URL = environment.urlService;
  private URL = 'localhost:5000';

  constructor(private http: HttpClient) { }

  // recuperarTodasDoUsuario(): Observable<Empresa[]> {
  //   return this.http.get(`${this.URL}/api/v1/auth/token`)
  //     .map(res => res)
  //     .catch((error: any) => Observable.throw(error || 'Server error'));
  // }

//   recuperarMinhasEmpresas(): Observable<Empresa[]> {
//     return this.http.get<Empresa[]>(`${this.URL}/v1/empresa/minhas-empresas/`)
//       .map(res => res)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }

//   salvar(empresa: Empresa): Observable<Empresa> {
//     return this.http.post<Empresa>(`${this.URL}/v1/empresa/`, empresa)
//       .map(res => res)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }

//   verificaIsBlacklisted(termo: string): Observable<boolean> {
//     return this.http.get<Boolean>(`${this.URL}/v1/empresa/verifica-is-blacklisted/${termo}`)
//       .map(res => res)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }

//   recuperarEmpresasDoUsuario(idEmpresa: number): Observable<Empresa> {
//     return this.http.get<Empresa>(`${this.URL}/v1/empresa/${idEmpresa}`)
//       .map(res => res)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }

//   BuscaEmpresasPorId(idEmpresa: number): Observable<Empresa> {
//     return this.http.get<Empresa>(`${this.URL}/v1/empresa/busca/${idEmpresa}`)
//       .map(res => res)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }

//   desativarEmpresa(id: number): Observable<Empresa> {
//     return this.http.delete<Empresa>(`${this.URL}/v1/empresa/${id}`);
//   }

//   obterEmpresaPorId(idEmpresa: number): Observable<Empresa> {
//     return this.http.get<Empresa>(`${this.URL}/v1/empresa/pagina-empresa/${idEmpresa}`)
//       .map(res => res)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }

//   avaliarEmpresa(empresa: Empresa): Observable<Empresa> {
//     return this.http.put(`${this.URL}/v1/empresa/avaliacao-empresa`, empresa)
//       .map(res => res)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }

//   obterFavoritosEmpresa(idEmpresa: number): Observable<AvaliacaoEmpresa> {
//     return this.http.get<AvaliacaoEmpresa>(`${this.URL}/v1/empresa/busca-favoritos-empresa/${idEmpresa}`)
//       .map(res => res)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }

//   obterFavoritosUsuarioEmpresa(): Observable<AvaliacaoEmpresa[]> {
//     return this.http.get<AvaliacaoEmpresa[]>(`${this.URL}/v1/empresa/card-favoritos-empresa`);
//   }
//   obterContadorSeguidores(idEmpresa: number): Observable<any> {
//     return this.http.get<any>(`${this.URL}/v1/empresa/contador-seguidores/${idEmpresa}`);
//   }

//   avaliarRegistro(empresa: Empresa): Observable<Empresa> {
//     return this.http.put(`${this.URL}/v1/empresa/registro-acesso-usuario/empresa`, empresa)
//       .map(res => res)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }

//   avaliarClickVerContatoEmpresa(empresa: Empresa): Observable<Empresa> {
//     return this.http.put(`${this.URL}/v1/empresa/avaliacao/vercontato`, empresa)
//       .map(res => res)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }
//     buscarTodasEmpresas(): Observable<Empresa[]> {
//       return this.http.get<Empresa[]>(`${this.URL}/v1/empresa/listar-empresa`)
//         .map(res => res)
//         .catch((error: any) => Observable.throw(error || 'Server error'));
//     }

//   buscarTodasEmpresasPaginadas(page: Pageable): Observable<Page> {
//     return this.http.post<Page>(`${this.URL}/v1/empresa/listar/empresas/paginadas`, page)
//       .map(res => res)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }
//  // Sprint 12 - RN73 - Exibir diretamente página da empresa
//   verificaTermoBuscarNomeEmpresa(textoBusca: string): Observable<Empresa>  {
//     return this.http.get<Empresa>(`${this.URL}/v1/empresa/verifica-textobusca-nomeempresa/${textoBusca}`)
//       .map(res => res)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }
}
