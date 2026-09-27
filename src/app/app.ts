import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './features/home/components/footer/footer.component';
import { Header } from './features/home/components/header/header';

@Component({
  imports: [RouterOutlet, FooterComponent, Header],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('poojari4u');
}
