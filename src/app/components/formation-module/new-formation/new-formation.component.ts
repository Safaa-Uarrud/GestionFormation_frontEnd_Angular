import { Component, OnInit } from '@angular/core';
import {Formation} from '../formation';
import {FormationService} from '../formation.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.css']
})
export class NewFormationComponent implements OnInit {
  formation: Formation = new Formation();
  submitted = false;

  constructor(private formationService: FormationService,
              private router: Router) { }

  ngOnInit() {
  }

  newFormation(): void {
    this.submitted = false;
    this.formation = new Formation();
  }

  save() {
    this.formationService.createFormation(this.formation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formation = new Formation();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/Formation']);
  }

}
