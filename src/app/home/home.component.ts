import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mp-home',
  template: `
    <mat-toolbar>
      <a *ngFor="let link of links">{{ link }}</a>
    </mat-toolbar>
    <h1>Home</h1>
  `,
  styles: [
    'mat-toolbar { justify-content: flex-end; }',
    'a { display: inline-block; margin: 0 5px; font-size: 1.2rem; font-weight: 400; }'
  ]
})
export class HomeComponent implements OnInit {

  links: string[];

  constructor() {}

  // Initialisation Methods
  ngOnInit(): void {
    this.links = [
      'Manage Recipes',
      'Plan Week',
      'Shopping List',
      'Settings'
    ];
  }

}
