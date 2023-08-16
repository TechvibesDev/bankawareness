import { Component } from '@angular/core';
import { AppService } from '../services';
import { ActivatedRoute } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage {
  page = 1;
  items: Array<any> = [];
  total = 0;
  id: number;
  isLoading = true;
  constructor(private a: AppService, private r: ActivatedRoute) {
    this.id = +this.r.snapshot.params.id;
    this.a.loadById(this.page,this.id).subscribe(res => {
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
      this.a.loadById(this.page,this.id).subscribe(res => {
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
