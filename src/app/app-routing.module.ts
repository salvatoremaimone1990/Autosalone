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

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  
  { path: 'home', 
    component: HomeComponent },
  { path: 'info/:indexAuto', 
    component: InfoComponent },
  { path: 'nuovomessaggio', 
    component: NuovomessaggioComponent },
  { path: 'contatto', 
    component: ContattoComponent },
  { path: 'nuova', 
    component: NuovaComponent },
  { path: 'automobili', component: AutomobiliComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthenticationGuard], data: { allowAnonymous: true } }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}