import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  popular: Array<any> = [];
  items: Array<any> = [];
  constructor(private a: AppService, private r: Router) {
    this.a.category().subscribe(res => {
      this.items = res;
    });
    this.a.popular().subscribe(res => {
      this.popular = res;
    });
  }

  ngOnInit() { }
  navigate(id: number, e: Event) {
    e.preventDefault();
    this.r.navigate([`./details/${id}`]);
  }
  navigate2(id: number, e: Event) {
    e.preventDefault();
    this.r.navigate([`./home/${id}`]);
  }
}
