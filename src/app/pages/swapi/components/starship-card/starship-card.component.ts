import {Component, Input, OnInit} from '@angular/core';
import {Starship} from '../../interfaces/swapi';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss']
})
export class StarshipCardComponent implements OnInit {
  @Input() starship: Starship;
  @Input() pages: boolean;
  @Input() page: boolean;



  constructor() {
  }

  ngOnInit() {
  }

}
