import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  favoriteSeason: string;
  seasons: string[] = ['formateur' , 'participant'];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form, this.favoriteSeason).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        if (this.favoriteSeason === 'formateur') {
          this.router.navigate(['/Formation']);
        } else if (this.favoriteSeason === 'participant') {
        {
          this.router.navigate(['/Beneficiaire']);
        }
        }
        },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
