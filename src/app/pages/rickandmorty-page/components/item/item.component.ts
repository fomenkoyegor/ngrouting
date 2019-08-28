import {Component, Input, OnInit} from '@angular/core';
import {Rickandmorty} from '../../interfaces/rickandmorty';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Rickandmorty;

  constructor() {
  }

  ngOnInit() {
  }

}
