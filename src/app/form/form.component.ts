import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  @Input() quotes: Quotes;
  @Output() quoteAdd= new EventEmitter<Quotes>();

  newDescription =  new Quotes (0,'','',0,0);

  onSubmit() {
 this.quoteAdd.emit(this.newDescription);
  }
  constructor() { }

  ngOnInit() {
  }

}
