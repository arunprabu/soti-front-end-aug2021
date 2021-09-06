import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {


  constructor( private elRef: ElementRef, private renderer: Renderer2 ) {  // Dependency Injection
    console.log('Inside ColorizerDirective');
    console.log(this.elRef.nativeElement);

    let el = this.elRef.nativeElement;
    this.renderer.setStyle(el, 'background-color', 'red');
    this.renderer.setStyle(el, 'height', '400px');

    // TODO: Change the color 
    // TODO: Learn about @HostListener and @HostBinding
  }

  @HostListener('click', ['$event'])
  handleDivClick(event: any){
    console.log(event);
    this.renderer.setStyle(event.target, 'background-color', 'yellow');
  }

}
