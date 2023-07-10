import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomobiliComponent } from './automobili/automobili.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './automobili/info/info.component';
import { ContattoComponent } from './contatto/contatto.component';
import { NuovaComponent } from './automobili/nuova/nuova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuovomessaggioComponent } from './contatto/nuovomessaggio/nuovomessaggio.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StripeModule } from 'stripe-angular';
import { ListaComponent } from './automobili/lista/lista.component';
import { AcquistoComponent } from './automobili/acquisto/acquisto.component';
import { AuthenticationInterceptor } from './authentication.interceptor';
import { LoginRoutingModule } from './login/login-routing.module';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AutomobiliComponent,
    InfoComponent,
    HomeComponent,
    NuovaComponent,
    ContattoComponent,
    NuovomessaggioComponent,
    AcquistoComponent,
    LogoutComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    LoginModule,
    AppRoutingModule,
    StripeModule.forRoot(
      'pk_test_51NQph3CXoPKOkelYTp3wY0tRVXpCr7BIxCJRMXDSo7AgLjFqrIg3mGkx4nr2yV5N79piV5RsPcCHgo1ayR1GGYpW00LHfPtpDM'
      ),
    ReactiveFormsModule 
  ],
  providers: [AuthenticationInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule {}
