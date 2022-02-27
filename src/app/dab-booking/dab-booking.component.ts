import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dab-booking',
  templateUrl: './dab-booking.component.html',
  styleUrls: ['./dab-booking.component.css']
})
export class DabBookingComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
