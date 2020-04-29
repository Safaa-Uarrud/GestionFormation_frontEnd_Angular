import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private listUrl = 'http://localhost:8080/Formations';
  private getUrl = 'http://localhost:8080/getFormation';
  private addCartUrl = 'http://localhost:8080/addCart';


  constructor(private http: HttpClient) { }

  getFormation(id: number): Observable<any> {
    return this.http.get(`${this.getUrl}/${id}`);
  }


  getFormationsList(): Observable<any> {
    return this.http.get(`${this.listUrl}`);
  }
  addCart(id: number, value: any): Observable<any> {
    return this.http.put(`${this.addCartUrl }/${id}`, value);
  }
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private addCartUrl = 'http://localhost:8080/addCart';
  private listCartUrl = 'http://localhost:8080/Carts';
  private getCartUrl = 'http://localhost:8080/getCart';
  private addUrl = 'http://localhost:8080/addcart';
  private deleteCartUrl = 'http://localhost:8080/deleteCart';
  private inscrireCartUrl = 'http://localhost:8080/inscrireCart';

  constructor(private http: HttpClient) { }

  createCart(employee: any): Observable<any> {
    return this.http.post(`${this.addUrl}`, employee);
  }
  inscrireCart(idCart: number, value: any): Observable<any> {
    return this.http.put(`${this.inscrireCartUrl }/${idCart}`, value);
  }
  getCart(idCart: number): Observable<any> {
    return this.http.get(`${this.getCartUrl}/${idCart}`);
  }

  addCart(id: number, value: any): Observable<any> {
    return this.http.put(`${this.addCartUrl }/${id}`, value);
  }

  getCartList(): Observable<any> {
    return this.http.get(`${this.listCartUrl}`);
  }
  deleteCart(idCart: number): Observable<any> {
    return this.http.delete(`${this.deleteCartUrl}/${idCart}`, { responseType: 'text' });
  }
}

@Injectable({
  providedIn: 'root'
})
export class InscriptionFormationService {
  private inscrireCartUrl = 'http://localhost:8080/inscrireCart';
  private inscrireUrl = 'http://localhost:8080/addInscriptioncart';
  private getInsUrl = 'http://localhost:8080/getIns';
  private listInsUrl = 'http://localhost:8080/InscriptionCarts';
  private getCartUrl = 'http://localhost:8080/getCart';

  constructor(private http: HttpClient) { }
  createIns(employee: any): Observable<any> {
    return this.http.post(`${this.inscrireUrl}`, employee);
  }

  getIns(id: number): Observable<any> {
    return this.http.get(`${this.getInsUrl}/${id}`);
  }

  inscrireCart(idCart: number, value: any): Observable<any> {
    return this.http.put(`${this.inscrireCartUrl }/${idCart}`, value);
  }

  getInsList(): Observable<any> {
    return this.http.get(`${this.listInsUrl}`);
  }
  getCart(idCart: number): Observable<any> {
    return this.http.get(`${this.getCartUrl}/${idCart}`);
  }
}
