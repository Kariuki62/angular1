import { Quotes } from './../quotes';
import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quotes ;

  quotes= [
    new Quotes(
      1,
      'Always deliver amazing quotes',
      'Kelvin Kariuki',0,0
    ),
  ];
  addQuotes(kquotes){
 this.quotes.unshift(kquotes);
  }

removeQuote(quoteDelete, index){
if (quoteDelete) {
  this.quotes.splice(index, 1);
}

}
  upvote(index){
    let k: number;
    k = this.quotes[index].upvote;
    k++;
    this.quotes[index].upvote=k;
  }
  downvote(index){
    let s: number;
    s = this.quotes[index].downvote;
    s++;
    this.quotes[index].downvote=s;
  }



  constructor() { }

  ngOnInit() {
  }

}
