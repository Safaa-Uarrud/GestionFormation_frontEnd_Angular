import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/login-module/_services/token-storage.service';
import { Router } from '@angular/router';
//import { Router } from '';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor( private router: Router, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }

  lgout(){
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }
}
