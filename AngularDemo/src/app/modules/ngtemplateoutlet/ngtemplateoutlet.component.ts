import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Intern } from './intern';

@Component({
  selector: 'app-ngtemplateoutlet',
  templateUrl: './ngtemplateoutlet.component.html',
  styleUrls: ['./ngtemplateoutlet.component.css']
})
export class NgtemplateoutletComponent implements OnInit {
  interns: Intern[] = [
    {
      id: 1,
      name: "Nirali",
      company: "1Rivet"
    },
    {
      id: 2,
      name: "Ayushi",
      company: "1Rivet"
    },
    {
      id: 3,
      name: "Shreya",
      company: "1Rivet"
    },
  ];

  @ViewChild('listView', {static: true}) list_view: TemplateRef<Template>;
  @ViewChild('cardView', {static: true}) card_view: TemplateRef<Template>;

  viewMode: TemplateRef<Template>;
  view_mode: string;

  constructor() { }

  ngOnInit(): void {
    this.viewMode = this.list_view;
    this.view_mode = 'Show Card View';
  }

  toggleView(): void {
    if (this.view_mode === 'Show Card View') {
      this.view_mode = 'Show List View';
      this.viewMode = this.card_view;
    } else {
      this.view_mode = 'Show Card View';
      this.viewMode = this.list_view;
    }
  }
}
