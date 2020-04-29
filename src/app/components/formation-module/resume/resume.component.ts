import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Resume} from '../resume';
import {ResumeService} from '../resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume: Resume = new Resume();
  submitted = false;


  constructor(private resumeService: ResumeService,
              private router: Router) { }

  ngOnInit() {
  }

  newResume(): void {
    this.submitted = false;
    this.resume = new Resume();
  }

  save() {
    this.resumeService.createResume(this.resume)
      .subscribe(data => console.log(data), error => console.log(error));
    this.resume = new Resume();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/Resume']);
  }

}
