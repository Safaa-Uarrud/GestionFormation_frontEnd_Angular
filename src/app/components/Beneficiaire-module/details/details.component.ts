import { Component, OnInit } from '@angular/core';
import {Formation} from '../beneficiaire';
import {FormationService} from '../beneficiaire.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  formation: Formation;

  constructor(private route: ActivatedRoute, private router: Router,
              private formationService: FormationService) { }

  ngOnInit() {
    this.formation = new Formation();

    this.id = this.route.snapshot.params.id;

    this.formationService.getFormation(this.id)
      .subscribe(data => {
        console.log(data);
        this.formation = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['Beneficiaire']);
  }

}
