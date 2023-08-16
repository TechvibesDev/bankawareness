/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../services';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutPage implements OnInit {
  id: number;
  data: any;
  related: Array<any> = [];
  tags: Array<any> = [];
  isLoading = true;
  constructor(private r: ActivatedRoute, private a: AppService) {
    this.id = +this.r.snapshot.params.id;
    this.a.details(this.id).subscribe(res => {
      this.data = res?.data;
      this.related = res?.related;
      this.tags = res?.tags;
      this.isLoading = false;
    });
  }
  ngOnInit() {
  }

}
