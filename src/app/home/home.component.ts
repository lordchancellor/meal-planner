import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mp-home',
  template: `
    <mat-toolbar>
      <a *ngFor="let link of links" [routerLink]="link.routerLink">{{ link.title }}</a>
    </mat-toolbar>
    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: Link[];

  constructor() {}

  // Initialisation Methods
  ngOnInit(): void {
    this.links = [
      { title: 'Manage Recipes', routerLink: 'recipes' },
      { title: 'Plan Week', routerLink: 'plan-week' },
      { title: 'Shopping List', routerLink: 'shopping-list' },
      { title: 'Settings', routerLink: 'settings' }
    ];
  }

}

interface Link {
  title: string;
  routerLink: string;
}
