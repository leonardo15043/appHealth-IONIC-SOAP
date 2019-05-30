import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('message')
  private message: Message;

  constructor() { }

  ngOnInit() {}

}
