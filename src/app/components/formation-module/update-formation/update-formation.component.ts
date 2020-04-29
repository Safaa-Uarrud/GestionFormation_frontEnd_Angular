import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Formation} from '../formation';
import {FormationService} from '../formation.service';
@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {
  id: number;
  formation: Formation;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private formatioService: FormationService) { }

  ngOnInit() {
    this.formation = new Formation();
    this.submitted = false;
    this.id = this.route.snapshot.params.id;

    this.formatioService.getFormation(this.id)
      .subscribe(data => {
        console.log(data);
        this.formation = data;
      }, error => console.log(error));
  }

  updateFormation() {
    this.formatioService.updateFormation(this.id, this.formation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formation = new Formation();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateFormation();
  }
  gotoList() {
    this.router.navigate(['/Formation']);
  }

}
