import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <p>CEB </p>
      <button type="button" (click)="handleSendData()">Send Data to Parent Comp</button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: Have the data in a variable to be sent to parent comp
  profileData: any = {
    firstName: 'Arun',
    city: 'Toronto',
    zip: 53444
  }

  // Step 2: Creating an eventEmitter Obj
  @Output() profileLoaded: EventEmitter<any> = new EventEmitter(); // Step 3: Making it as custom event with @Output()

  constructor() { }

  ngOnInit(): void {
  }

  handleSendData(){
    console.log('Will send data to Parent comp');
    // Step 4: Sending the data thru emit method
    this.profileLoaded.emit(this.profileData); 
  }

}
