import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users } from '../../Utils/utils';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails implements OnInit {
  private route = inject(ActivatedRoute);
  user= users;
  userId = 0;
  // userId : string; 
  // constructor() {
  //   console.log("%cUserDetails constructor called ", "color: red; font-size: 20px;");
  // }

  ngOnInit(){
    // console.log("%cUserDetails ngOnInit called ", "color: blue; font-size: 20px;font-style: italic;");
    const currId = Number(this.route.snapshot.paramMap.get('userId'));
    console.log( "currId:", currId, );
    this.userId = currId;
  }
}

