import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bgcolor:string="";
  @HostBinding('style.color') color:string="";

  @HostListener('mouseenter') setMouseEnter() {
    this.bgcolor = "red";
    this.color = "white";
  }

  @HostListener('mouseleave') setMouseLeave() {
    this.bgcolor = "yellow";
    this.color = "black"
  }

  constructor() { 

  }

  ngOnInit() {
    this.bgcolor = "yellow";
  }

}
