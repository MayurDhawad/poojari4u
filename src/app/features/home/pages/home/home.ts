import { Component } from '@angular/core';

import { Header } from '../../components/header/header';
import { HomeSection } from '../../components/home-section/home-section';
import { ServiceCategories } from '../../components/service-categories/service-categories';
import { PopularPujas } from '../../components/popular-pujas/popular-pujas';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    HomeSection,
    ServiceCategories,
    PopularPujas,
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}