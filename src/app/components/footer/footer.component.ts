import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isDark = false;
  constructor(private r: Router) {
    this.isDark = localStorage.getItem('isDark') !== null;
  }

  ngOnInit() {}
  link(url: string, e: Event) {
    e.preventDefault();
    this.r.navigate([url]);
  }
}
