import { Component } from '@angular/core';

@Component({
  selector: 'app-accor',
  imports: [],
  templateUrl: './accor.html',
  styleUrl: './accor.css',
})
export class Accor {
    accordionData = [
      {
        title: 'Introduction',
        content: 'This is the introduction section.',
        isOpen: false
      },
      {
        title: 'Angular',
        content: 'Angular is a frontend framework developed by Google.',
        isOpen: false
      },
      {
        title: 'TypeScript',
        content: 'TypeScript is a superset of JavaScript that adds static typing.',
        isOpen: false
      },
      {
        title: 'HTML',
        content: 'HTML is used to create the structure of web pages.',
        isOpen: false
      },
      {
        title: 'CSS',
        content: 'CSS is used to style web pages.',
        isOpen: false
      }
    ];

  toggle(index: number) {
    this.accordionData[index].isOpen =
      !this.accordionData[index].isOpen;
  }
}
