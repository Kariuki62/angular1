import { Quotes } from './../quotes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()quote: Quotes;
  @Output() removeQuote=new EventEmitter<boolean>();
  deleteQuote(cleared:boolean){
     this.removeQuote.emit(cleared);
  }
  constructor() { }

  ngOnInit() {
  }

}
