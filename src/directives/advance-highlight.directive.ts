import { Directive, ElementRef, HostBinding, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvHighlight]', // need to be a unique selector. [] means attribute.
})
export class AdvanceHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'lightblue';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  // On the element where this directive sits, please access the style property and background color sub-property

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
