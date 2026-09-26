import { Component, OnInit } from '@angular/core';
import { SearchBox } from '../../../shared/search-box';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-poojaris',
  templateUrl: './poojaris.component.html',
  styleUrls: ['./poojaris.component.scss'],
  imports: [
    Header,
    SearchBox
  ]
})
export class PoojarisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
