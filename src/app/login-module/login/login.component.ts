import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  content = '';
  isFormateur = false;
  isParticipant = false;

  constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.isFormateur = this.roles.includes('ROLE_FORMATEUR');
        this.isParticipant = this.roles.includes('ROLE_PARTICIPANT');
        if (this.roles.includes('ROLE_FORMATEUR')) {
          this.router.navigate(['/Formation']);
        }
        if (this.isFormateur) {
          this.router.navigate(['/Formation']);
        }
        if (this.isParticipant) {
          this.router.navigate(['/Beneficiaire']);
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    if (this.isFormateur) {

    }
  }
}
