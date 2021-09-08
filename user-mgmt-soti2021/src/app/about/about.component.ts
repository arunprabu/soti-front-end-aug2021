import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  sampleText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

  today: Date = new Date();

  exampleText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error est odit laboriosam vitae impedit eaque architecto accusantium';

  constructor() { }

  ngOnInit(): void {
  }

}
