import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      <app-menu>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <p class="grey">Developed in Sep 2021</p>
      <p class="green">Copyright 2021 - Arun</p>
    </div>
  `,
  /* Writing Styles for the footer comp html */
  styles: [
    `
      .grey{
        color: grey;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
