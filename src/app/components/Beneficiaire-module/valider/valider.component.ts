import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Cart} from '../beneficiaire';
import {CartService} from '../beneficiaire.service';
import {Formation} from '../beneficiaire';
import {FormationService} from '../beneficiaire.service';
@Component({
  selector: 'app-valider',
  templateUrl: './valider.component.html',
  styleUrls: ['./valider.component.css']
})
export class ValiderComponent implements OnInit {
  idCart: number;
  id: number;
  formation: Formation;
  cart: Cart;
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router,
              private formationService: FormationService,
              private cartService: CartService) { }

              ngOnInit() {
                this.id = this.route.snapshot.params.id;
                this.formationService.getFormation(this.id)
                 .subscribe(data => {
                 console.log(data);
                 this.formation = data;
                }, error => console.log(error));
              }

  addCart() {
    this.formationService.addCart(this.id, this.formation)
      .subscribe(data => console.log(data), error => console.log(error));

    this.save();
  }
  save() {
    this.cartService.createCart(this.cart)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cart = new Cart();
    this.gotoList();
  }

  newCart(): void {
    this.submitted = false;
    this.cart = new Cart();
  }

  onSubmit() {
    this.submitted = true;
    this.addCart();

  }
  gotoList() {
    this.router.navigate(['/cart']);
  }
  Annuler() {
    this.router.navigate(['/Beneficiaire']);
  }
}
