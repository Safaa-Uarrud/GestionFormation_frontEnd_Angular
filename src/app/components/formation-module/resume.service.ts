import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private addUrl = 'http://localhost:8080/formation/addCv';

  private listUrl = 'http://localhost:8080/formation/Cv';
  private deleteeUrl = 'http://localhost:8080/formation/deleteCv';
  private getUrl = 'http://localhost:8080/formation/getCv';

  constructor(private http: HttpClient) { }

  getResume(id: number): Observable<any> {
    return this.http.get(`${this.getUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createResume(cv: Object): Observable<Object> {
    return this.http.post(`${this.addUrl}`, cv);
  }

  deleteResume(id: number): Observable<any> {
    return this.http.delete(`${this.deleteeUrl}/${id}`, { responseType: 'text' });
  }

  getResumeList(): Observable<any> {
    return this.http.get(`${this.listUrl}`);
  }
}
