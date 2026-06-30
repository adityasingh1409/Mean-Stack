import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  data = input<number>();

  parentObj = input<dataObj>();

  BooleanClick = input<boolean>();

}

interface dataObj {
  name: string;
  age: string;
  c: number;
}