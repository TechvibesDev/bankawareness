/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from 'src/app/services';
import { Router } from '@angular/router';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
declare const $: any;
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MobileComponent implements OnInit {
  url = '';
  items: Array<any> = [];
  isOpen = false;
  subOpen = -1;
  constructor(private a: AppService, private r: Router, private b: StatusBar) {
    this.a.category().subscribe(res => {
      this.items = res;
    });
  }
  ngOnInit() {
    const $this = this;
    setTimeout(() => {
      $('.mobile-menu-toggle').click(function () {
        const $body = $('body');
        if (!$('body').hasClass('nav-active')) {
          $body.addClass('nav-active');
        };
      });
      $('.hide-mobile-menu').click(function () {
        const $body = $('body');
        if ($('body').hasClass('nav-active')) {
          $body.removeClass('nav-active');
        };
      });
      window.addEventListener('mouseup', function (e) {
        const $body = $('body');
        const dataId = 'undefined' === typeof ($(e.target).attr('data-id')) ? '' : $(e.target).attr('data-id');
        if (dataId === 'overlay' && $('body').hasClass('nav-active')) {
          $body.removeClass('nav-active');
        };
      });
      $('.show-search').click(function () {
        $('#main-search-wrap').toggle();
      });
      $('.search-close').click(function () {
        $('#main-search-wrap').toggle();
      });
      $('.darkmode-toggle').click(function () {
        $('html').toggleClass('is-dark');
        if ($('html').hasClass('is-dark')) {
          $('#appLogo').attr('src', $('#appLogo').attr('data-dark-src'));
          $('#Image101_img').attr('src', $('#appLogo').attr('data-dark-src'));
        } else {
          $('#appLogo').attr('src', $('#appLogo').attr('data-src'));
          $('#Image101_img').attr('src', $('#appLogo').attr('data-src'));
        }
        $this.setDarkMode();
      });
    }, 200);
  }
  navigate(url: string, e: Event) {
    e.preventDefault();
    this.r.navigate([`./${url}`]);
  }
  link(url: string, e: Event) {
    e.preventDefault();
    this.r.navigate([url]);
  }
  private setDarkMode() {
    const isDark = localStorage.getItem('isDark') !== null;
    if (!isDark) {
      localStorage.setItem('isDark', '1');
      this.b.backgroundColorByHexString('#000000');
      this.b.overlaysWebView(false);
      this.b.styleLightContent();
    } else {
      localStorage.removeItem('isDark');
      this.b.backgroundColorByHexString('#ffffff');
      this.b.overlaysWebView(false);
      this.b.styleDefault();
    }
  }
}
