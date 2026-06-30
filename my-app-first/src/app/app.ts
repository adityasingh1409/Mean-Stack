import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Accor } from './accor/accor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Accor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app-first');
  name: string = 'aditya jodd';
  count: number = 0;
imgArr :string[] = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOJJ-qDxhL2ikqFzHFKdED2rnBghxxRZuueylVgKpc8Wbq_HqZrR3FV5K&s=10",
  "https://static.vecteezy.com/system/resources/thumbnails/072/228/232/small/a-cute-white-fluffy-cat-and-a-golden-retriever-puppy-lie-together-on-a-garden-path-surrounded-by-colorful-blooming-flowers-photo.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2ltGah-Dw_eg8PH3vwCeAcLaxDFIqtasz8zCd6xyFbGdnw1r6_H12_g&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdX029ohIUSygq9zirl9fSNBwSLqEOaKEYuw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHyQ4-swhNvCV2lm142jxwj7AfX880takXQ&s",
];

  increment() : void {
    this.count = (this.count + 1) % this.imgArr.length;
  }
  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
}


