import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutomobiliComponent } from './automobili/automobili.component';
import { InfoComponent } from './automobili/info/info.component';
import { NuovaComponent } from './automobili/nuova/nuova.component';
import { ContattoComponent } from './contatto/contatto.component';
import { NuovomessaggioComponent } from './contatto/nuovomessaggio/nuovomessaggio.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication-guard.guard';
import { BuyCarComponent } from './automobili/buy-car/buy-car.component';
import { ConfermaAcquistoComponent } from './automobili/buy-car/conferma-acquisto/conferma-acquisto.component';
import { AnnullaComponent } from './automobili/annulla/annulla.component';
import { AcquistoComponent } from './automobili/acquisto/acquisto.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'annulla', component: AnnullaComponent },
  { path: 'acquisto', component: AcquistoComponent },
  { path: 'buy', component: BuyCarComponent, data: { title: 'Acquista' } },
  { path: 'conferma-acquisto', component: ConfermaAcquistoComponent },
  { path: 'automobili', component: AutomobiliComponent, canActivate: [AuthenticationGuard], data: { title: 'Automobili' } },
  { path: 'automobili/info/:indexAuto', component: InfoComponent, canActivate: [AuthenticationGuard], data: { title: 'Dettagli Auto' } },
  { path: 'nuova', component: NuovaComponent, canActivate: [AuthenticationGuard], data: { title: 'Nuova Auto' } },
  { path: 'contatto', component: ContattoComponent, canActivate: [AuthenticationGuard], data: { title: 'Contatto' } },
  { path: 'messaggio', component: NuovomessaggioComponent, canActivate: [AuthenticationGuard], data: { title: 'Messaggio' } },
  { path: 'login', component: LoginComponent, canActivate: [AuthenticationGuard], data: { title: 'Login' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
