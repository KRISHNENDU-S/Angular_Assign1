import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  standalone: true, // Make sure this is included
  selector: '[customAttribute]'
})
export class AttributeDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setProperty(el.nativeElement, 'textContent', 'Made by a directive using attribute!');
  }
}
