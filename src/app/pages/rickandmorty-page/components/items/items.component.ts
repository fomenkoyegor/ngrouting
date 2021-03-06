import {Component, OnInit} from '@angular/core';
import {RickandmortyService} from '../../services/rickandmorty.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(public rickandmortyService: RickandmortyService) {
  }

  ngOnInit() {
  }

  public onScroll(): void {
    this.rickandmortyService.getCharacters();
  }
}
