import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
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


  @NgModule({
  declarations: [
    AppComponent, ListaComponent, AutomobiliComponent,
    InfoComponent, HomeComponent, NuovaComponent,
    ContattoComponent, NuovomessaggioComponent,
    AcquistoComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule, FlexLayoutModule,AppRoutingModule,AppRoutingModule,FormsModule,CommonModule, LoginRoutingModule, 
    ReactiveFormsModule, BrowserAnimationsModule, StripeModule.forRoot("")
  ],
  providers: [AuthenticationInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
