import { Component } from '@angular/core';

import { Header } from '../../components/header/header';
import { HomeSection } from '../../components/home-section/home-section';
import { ServiceCategories } from '../../components/service-categories/service-categories';
import { PopularPujas } from '../../components/popular-pujas/popular-pujas';
import { FooterComponent } from '../../components/footer/footer.component';
import { BookingProcessComponent } from '../../components/booking-process/booking-process.component';
import { WhyPoojari4uComponent } from '../../components/why-poojari4u/why-poojari4u.component';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    FooterComponent,
    HomeSection,
    ServiceCategories,
    PopularPujas,
    FooterComponent,
    BookingProcessComponent,
    WhyPoojari4uComponent
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}