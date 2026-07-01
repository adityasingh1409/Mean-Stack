import { Component } from '@angular/core';
import { users } from '../../../Utils/utils';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  users = users;
}
