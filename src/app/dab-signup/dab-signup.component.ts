import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dab-signup',
  templateUrl: './dab-signup.component.html',
  styleUrls: ['./dab-signup.component.css']
})
export class DabSignupComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }
}
