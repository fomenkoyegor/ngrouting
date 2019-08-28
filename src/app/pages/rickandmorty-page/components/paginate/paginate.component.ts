import {Component, Input, OnInit} from '@angular/core';
import {RickandmortyService} from '../../services/rickandmorty.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {
  @Input() page: number;
  public pages: Array<number>;

  constructor(
    public rickandmortyService: RickandmortyService
  ) {
  }

  ngOnInit() {
    this.pages = [...Array(this.rickandmortyService.pages).keys()];
  }

}
