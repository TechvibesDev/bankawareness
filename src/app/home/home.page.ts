/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component } from '@angular/core';
import { AppService } from '../services';
declare const $: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  page = 1;
  items: Array<any> = [];
  total = 0;
  isLoading = true;
  constructor(private a: AppService) {
    this.a.load(this.page).subscribe(res => {
      this.items = res?.data;
      this.total = res?.total;
      this.isLoading = false;
    });
  }
  loadMore() {
    $('#loadMore').fadeOut();
    $('.loading').fadeIn();
    if (this.total > this.items.length) {
      this.page++;
      this.a.load(this.page).subscribe(res => {
        this.items = [...this.items, ...res?.data];
        this.total = res?.total;
        $('#loadMore').fadeIn();
        $('.loading').fadeOut();
      },error=>{
        $('#loadMore').fadeIn();
        $('.loading').fadeOut();
      });
    }
  }
  get isReadMore(): boolean{
    return this.total > this.items.length && this.items.length > 0;
  }
}
