import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngtemplateoutlet',
  templateUrl: './ngtemplateoutlet.component.html',
  styleUrls: ['./ngtemplateoutlet.component.scss']
})
export class NgtemplateoutletComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  title = 'ngTemplateOutlet Example';

  @ViewChild('cardTemplate', { static: true }) cardTemplate: TemplateRef<HTMLElement>;
  @ViewChild('listTemplate', { static: true }) listTemplate: TemplateRef<HTMLElement>;

  mode = "card"

  items = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals'
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript'
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    },
  ];

  modeOptions = [
    { mode: "card" },
    { mode: "list" },
  ];

  get template() {

    if (this.mode == "list") return this.listTemplate
    return this.cardTemplate
  }
}
