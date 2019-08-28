import {Component, Input, OnInit} from '@angular/core';
import {Planets} from '../../interfaces/swapi';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {
  @Input() planet: Planets;

  @Input() pages = false;
  @Input() page = false;

  constructor() {
  }

  ngOnInit() {
  }

}
