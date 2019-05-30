import { Component, OnInit , Input } from '@angular/core';
import { Message } from '../../models/message';
import { DialogflowService } from '../../../services/dialogflow.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent  {

  // tslint:disable-next-line:no-input-rename
  @Input('message')
  private message: Message;

  // tslint:disable-next-line:no-input-rename
  @Input('messages')
  private messages: Message[];

  constructor(
    private dialogFlowService: DialogflowService
  ) { }


  public sendMessage(): void {

    if (this.message.content != '') {

      this.message.timestamp = new Date();
      this.messages.push(this.message);

      this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
          this.messages.push(
            new Message(res.result.fulfillment.speech, 'pulse', res.timestamp)
          );
        });

      this.dialogFlowService.getResponse(this.message.content);
      this.message = new Message('', 'person');

    }

  }

}
