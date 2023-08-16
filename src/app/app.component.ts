/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable space-before-function-paren */
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { JsService } from './services';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private js: JsService, private r: Router, private p: Platform, private b: StatusBar) {
    this.p.ready().then(() => {
      this.b.overlaysWebView(false);
    });
    this.r.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        window.scroll(0, 0);
        const $body = $('body');
        if ($('body').hasClass('nav-active')) {
          $body.removeClass('nav-active');
        };
      }
    });
    setTimeout(() => {
      const isDark = localStorage.getItem('isDark') !== null;
      if (!isDark) {
        $('html').removeClass('is-dark');
        this.b.backgroundColorByHexString('#ffffff');
        this.b.overlaysWebView(false);
        this.b.styleDefault();
      } else {
        $('html').addClass('is-dark');
        this.b.backgroundColorByHexString('#000000');
        this.b.overlaysWebView(false);
        this.b.styleLightContent();
      }
    }, 20);
  }

}
