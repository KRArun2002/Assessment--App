import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  OnSubmit1() {
    this.route.navigate(['/test']);
  }
  OnSubmit2() {
    this.route.navigate(['/category1']);
  }
  OnSubmit3() {
    this.route.navigate(['/category2']);
  }

}
