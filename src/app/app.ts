import { Component, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './features/home/components/footer/footer.component';
import { Header } from './features/home/components/header/header';
import { filter } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
   imports: [RouterOutlet, RouterLink, Header, FooterComponent]
})
export class App {

  protected readonly title = signal('poojari4u');
  showHeader = true;
  showFooter = true;

  // Paths where header should be hidden
  private hiddenRoutes = ['/login'];
main: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Check if current URL starts with any hidden route
      const currentUrl = event.urlAfterRedirects.split('?')[0]; // strip query params
      this.showHeader = !this.hiddenRoutes.some(route => currentUrl.startsWith(route));
      this.showFooter = !this.hiddenRoutes.some(route => currentUrl.startsWith(route));
    });
  }
}
