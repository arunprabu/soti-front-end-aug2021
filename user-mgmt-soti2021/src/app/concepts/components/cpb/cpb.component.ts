import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: Make age as custom property 
  @Input() age = 20; // @Input() is making age as custom property to the app-cpb selector
  // For Step 2 -- Refer concepts.comp.html 

  constructor() { }

  ngOnInit(): void {
  }

}
