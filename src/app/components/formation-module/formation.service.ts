import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private addUrl = 'http://localhost:8080/addFormation';

  private listUrl = 'http://localhost:8080/Formations';
  private updateUrl = 'http://localhost:8080/updateFormation';
  private deleteeUrl = 'http://localhost:8080/deleteFormation';
  private getUrl = 'http://localhost:8080/getFormation';

  constructor(private http: HttpClient) { }

  getFormation(id: number): Observable<any> {
    return this.http.get(`${this.getUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createFormation(formation: Object): Observable<Object> {
    return this.http.post(`${this.addUrl}`, formation);
  }

  // tslint:disable-next-line:ban-types
  updateFormation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.updateUrl}/${id}`, value);
  }

  deleteFormation(id: number): Observable<any> {
    return this.http.delete(`${this.deleteeUrl}/${id}`, { responseType: 'text' });
  }

  getFormationsList(): Observable<any> {
    return this.http.get(`${this.listUrl}`);
  }
}
