import { Component, OnInit, AfterViewInit, Input, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Message } from '../../models/message';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {


  // tslint:disable-next-line:no-input-rename
  @Input('messages')
  public messages: Message[];

  @ViewChild('chatlist', { read: ElementRef }) chatList: ElementRef;
  @ViewChildren(ItemComponent, { read: ElementRef }) chatItems: QueryList<ItemComponent>;


  constructor() { }

  ngAfterViewInit() {
    this.chatItems.changes.subscribe(elements => {
      this.scrollToBottom();
    });
  }

  private scrollToBottom(): void {
    try {
      this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
    }
    catch (err) {
      console.log('Could not find the "chatList" element.');
    }
  }

  ngOnInit() {}


}
