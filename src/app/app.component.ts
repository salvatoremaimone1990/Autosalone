import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AUTOSALONE';
  isPhoneviewed = false;
 

  
constructor(
  public responsive: BreakpointObserver,
  private router: Router) {}

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
  logout(): void {
    this.router.navigate(['home']);
    localStorage.removeItem("token");
  }
  
  ngOnInit() {
    
    this.responsive
      .observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isPhoneviewed = false;
        if (result.matches) {
          this.isPhoneviewed = true;
        }
      });
  }

 
}
