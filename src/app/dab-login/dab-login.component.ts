import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dab-login',
  templateUrl: './dab-login.component.html',
  styleUrls: ['./dab-login.component.css']
})
export class DabLoginComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
