import {Component, Input, OnInit} from '@angular/core';
import {NewItem} from '../../interfaces/new-item';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  @Input() item: NewItem;

  constructor() {
  }

  ngOnInit() {
  }

}
