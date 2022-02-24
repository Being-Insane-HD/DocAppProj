import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dab-addition',
  templateUrl: './dab-addition.component.html',
  styleUrls: ['./dab-addition.component.css']
})
export class DabAdditionComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
