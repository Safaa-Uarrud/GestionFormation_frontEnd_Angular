import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InscriptionCart} from '../beneficiaire';
import {InscriptionFormationService} from '../beneficiaire.service';
import {Cart} from '../beneficiaire';
import {CartService} from '../beneficiaire.service';
@Component({
  selector: 'app-inscription-formation',
  templateUrl: './inscription-formation.component.html',
  styleUrls: ['./inscription-formation.component.css']
})
export class InscriptionFormationComponent implements OnInit {

  idCart: number;
  id: number;
  cart: Cart;
  inscription: InscriptionCart;
 submitted = false;
  constructor(private route: ActivatedRoute, private router: Router,
              private inscriptionService: InscriptionFormationService,
              private cartService: CartService) { }


              ngOnInit() {

                this.idCart = this.route.snapshot.params.idCart;
                this.cartService.getCart(this.idCart)
                 .subscribe(data => {
                 console.log(data);
                 this.cart = data;
                }, error => console.log(error));
              }

    inscrireCart() {
    this.cartService.inscrireCart(this.idCart, this.cart)
      .subscribe(data => console.log(data), error => console.log(error));
    this.save();
  }
  save() {
    this.inscriptionService.createIns(this.inscription)
      .subscribe(data => console.log(data), error => console.log(error));
    this.inscription = new InscriptionCart();
    //this.gotoList();
  }

  newInscription(): void {
    this.submitted = false;
    this.inscription = new InscriptionCart();
  }

  onSubmit() {
    this.submitted = true;
    this.inscrireCart();
    // this.save();

  }
  /*gotoList() {
    this.router.navigate(['/cart']);
  }*/

}




