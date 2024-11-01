import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  standalone: true, // Mark as standalone
  selector: 'custom-element'
})
export class ElementNameDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setProperty(el.nativeElement, 'textContent', 'Made by a directive using element name!');
  }
}
