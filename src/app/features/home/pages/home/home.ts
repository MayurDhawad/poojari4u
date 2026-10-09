import { Component } from '@angular/core';
import { HomeSection } from '../../components/home-section/home-section';
import { ServiceCategories } from '../../components/service-categories/service-categories';
import { PopularPoojas } from '../../components/popular-pujas/popular-poojas';
import { BookingProcessComponent } from '../../components/booking-process/booking-process.component';
import { WhyPoojari4uComponent } from '../../components/why-poojari4u/why-poojari4u.component';

@Component({
  selector: 'app-home',
  imports: [
    HomeSection,
    PopularPoojas,
    BookingProcessComponent,
    WhyPoojari4uComponent
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}