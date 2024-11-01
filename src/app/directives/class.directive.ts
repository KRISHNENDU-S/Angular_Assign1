import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  standalone: true, // Mark as standalone
  selector: '.custom-class'
})
export class ClassDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setProperty(el.nativeElement, 'textContent', 'Made by a directive using class!');
  }
}
