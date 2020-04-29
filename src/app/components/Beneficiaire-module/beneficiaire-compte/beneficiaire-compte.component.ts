import { Component, OnInit } from '@angular/core';
import {FormationService} from '../beneficiaire.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Formation} from '../beneficiaire';


@Component({
  selector: 'app-beneficiaire-compte',
  templateUrl: './beneficiaire-compte.component.html',
  styleUrls: ['./beneficiaire-compte.component.css']
})
export class BeneficiaireCompteComponent implements OnInit {

  formation: Observable<Formation[]>;
  constructor(private formationService: FormationService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.formation = this.formationService.getFormationsList();
  }

  addCart(id: number) {
    this.router.navigate(['addCart', id]);
  }
  
  Details(id: number) {
    this.router.navigate(['detailsben', id]);
  }

  

}
