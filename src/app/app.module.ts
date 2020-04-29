import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationMenuComponent } from './components/layout/navigation-menu/navigation-menu.component';
import { RightSidebarComponent } from './components/layout/right-sidebar/right-sidebar.component';
import { LoginComponent } from './login-module/login/login.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb.component';
import {NewFormationComponent} from './components/formation-module/new-formation/new-formation.component';
import {FormationListComponent} from './components/formation-module/formation-list/formation-list.component';
import {UpdateFormationComponent} from './components/formation-module/update-formation/update-formation.component';
import {FormationDetailsComponent} from './components/formation-module/formation-details/formation-details.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './login-module/register/register.component';
import { ProfileComponent } from './login-module/profile/profile.component';
import {authInterceptorProviders} from './login-module/_helpers/auth.interceptor';
import {BeneficiaireCompteComponent} from './components/Beneficiaire-module/beneficiaire-compte/beneficiaire-compte.component';

import {CartComponent} from './components/Beneficiaire-module/cart/cart.component';
import {InscriptionFormationComponent} from './components/Beneficiaire-module/inscription-formation/inscription-formation.component';
import {DetailsComponent} from './components/Beneficiaire-module/details/details.component';
import {ResumeComponent} from './components/formation-module/resume/resume.component';
import {BreadcrumbBenComponent} from './components/layout/breadcrumb-beneficiaire/breadcrumb-beneficiaire.component';
import {NavigationMenuBenComponent} from './components/layout/navigation-menu-beneficiaire/navigation-menu-beneficiaire.component';
import {HeaderBenComponent} from './components/layout/header-beneficiaire/header-beneficiaire.component';
import {ValiderComponent} from './components/Beneficiaire-module/valider/valider.component';
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    NavigationMenuComponent,
    RightSidebarComponent,
    LoginComponent,
    MainDashboardComponent,
    BreadcrumbComponent,
    NewFormationComponent,
    FormationListComponent,
    UpdateFormationComponent,
    FormationDetailsComponent,
    RegisterComponent,
    ProfileComponent,
    HeaderBenComponent,
    NavigationMenuBenComponent,
    BreadcrumbBenComponent,
    BeneficiaireCompteComponent,
    CartComponent,
    InscriptionFormationComponent,
    DetailsComponent,
    ResumeComponent,
    ValiderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [authInterceptorProviders,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
