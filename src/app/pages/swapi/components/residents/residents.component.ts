import {Component, Input, OnInit} from '@angular/core';
import {People} from '../../interfaces/swapi';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent implements OnInit {
  @Input() residents: Array<string>;

  constructor() {
  }

  ngOnInit() {
  }

}
