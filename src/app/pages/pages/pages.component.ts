import {Component, OnInit} from '@angular/core';

declare var $;

@Component({
  selector: 'sistad-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    $('body').addClass('hold-transition skin-blue sidebar-mini');
  }

}
