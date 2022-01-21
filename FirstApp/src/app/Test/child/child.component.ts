import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<h2>{{"Hello " + name}}<h2><button (click)="onClick()">Send Event</button>',
  styles: []
})
export class ChildComponent implements OnInit {

  @Input('parentData') public name:string="";
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.childEvent.emit('Hey...!');
  }

}
