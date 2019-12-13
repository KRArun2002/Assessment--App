import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpg',
  templateUrl: './loginpg.component.html',
  styleUrls: ['./loginpg.component.css']
})
export class LoginpgComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor() { }

  ngOnInit() {
  }

}
