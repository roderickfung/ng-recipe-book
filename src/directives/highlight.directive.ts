import { Directive, ElementRef, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // need to be a unique selector. [] means attribute.
})
export class HighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'lightblue';
  }
}
