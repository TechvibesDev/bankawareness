/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsService, AppService } from 'src/app/services';
declare const $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  url = '';
  items: Array<any> = [];
  isDark = false;
  constructor(private js: JsService, private a: AppService, private rt: Router) {
    this.url = this.rt.url;
    this.isDark = localStorage.getItem('isDark') !== null;
    this.a.category().subscribe(res => {
      this.items = res;
    }, error => {

    });
  }

  ngOnInit() {
  }

  fmtUrl(param: string): string {
    if (this.url == '/home') {
      return param
    } else if (this.url == '/pages/about' || this.url == '/pages/contact') {
      return '../../home/' + param
    } else {
      return '../' + param
    }
  }
}
