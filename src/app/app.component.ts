import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthenticationService } from './authentication.service';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
    private authenticationService: AuthenticationService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.responsive
      .observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isPhoneviewed = false;
        if (result.matches) {
          this.isPhoneviewed = true;
        }
      });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updatePageTitle();
      }
    });
  }

  private updatePageTitle() {
    const routeTitle = this.getTitleFromRoute(this.router.routerState, this.router.routerState.root).join(' - ');
    const newTitle = `${this.title} - ${routeTitle}`;
    this.titleService.setTitle(newTitle);
  }

  private getTitleFromRoute(state: any, parent: any): string[] {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getTitleFromRoute(state, state.firstChild(parent)));
    }

    return data;
  }
}
