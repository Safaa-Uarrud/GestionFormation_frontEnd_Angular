import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { LoginComponent } from './login-module/login/login.component';
import {NewFormationComponent} from './components/formation-module/new-formation/new-formation.component';
import {FormationListComponent} from './components/formation-module/formation-list/formation-list.component';
import {UpdateFormationComponent} from './components/formation-module/update-formation/update-formation.component';
import {FormationDetailsComponent} from './components/formation-module/formation-details/formation-details.component';
import {RegisterComponent} from './login-module/register/register.component';
import {ProfileComponent} from './login-module/profile/profile.component';
import {BeneficiaireCompteComponent} from './components/Beneficiaire-module/beneficiaire-compte/beneficiaire-compte.component';
import {ValiderComponent} from './components/Beneficiaire-module/valider/valider.component';
import {DetailsComponent} from './components/Beneficiaire-module/details/details.component';
import {InscriptionFormationComponent} from './components/Beneficiaire-module/inscription-formation/inscription-formation.component';
import {ResumeComponent} from './components/formation-module/resume/resume.component';
import {CartComponent} from './components/Beneficiaire-module/cart/cart.component';



const routes: Routes = [
  { path: 'Beneficiaire', component: BeneficiaireCompteComponent },
  { path: 'add', component: NewFormationComponent},
  { path: 'addCart/:id', component: ValiderComponent },
  { path: 'detailsben/:id', component: DetailsComponent },
  { path: 'inscrireCart/:idCart', component: InscriptionFormationComponent},
  { path: 'addInscriptioncart', component: InscriptionFormationComponent},
  { path: 'resume', component: ResumeComponent },
  { path: 'main-dashboard', component: MainContentComponent },
  { path: 'Formation', component: FormationListComponent },
  { path: 'update/:id', component: UpdateFormationComponent },
  { path: 'details/:id', component: FormationDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
