import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Card } from './card/card';
import { Contact } from './contact/contact';
import { Child } from './child/child';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Card,Contact,Child,About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = signal("test");

  arr = [10, 20, 30, 40];

  obj = {
    name: "TestName",
    age: "TestAge",
    c: 20
  };

  bool = true;

  name = signal("Aditya");

}