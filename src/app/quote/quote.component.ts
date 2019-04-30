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
    new Quote(1,"Respect","Job", ""),
    new Quote(2,"Respect","Job", ""),
    new Quote(3,"Respect","Job", ""),
  ]

  constructor() { }

  ngOnInit() {
  }

}
