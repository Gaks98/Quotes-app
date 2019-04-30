import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

public date = new Date;

  quotes = [
    new Quote(1,"","", ""),
    new Quote(2,"","", ""),
    new Quote(3,"","", ""),
  ]

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
    //this.date = new Date(quote.date)
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
