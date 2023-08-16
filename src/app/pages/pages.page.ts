import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../services';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {
  page = 'aboutus';
  data: any;
  isLoading = true;
  constructor(private r: ActivatedRoute,private a: AppService) {
    this.page = this.r.snapshot.params.page;
    this.a.pages(this.page).subscribe(res => {
      this.data = res;
      this.isLoading = false;
    });
   }

  ngOnInit() {
  }
  get pTitle(): string{
    const title =  this.data?.PageName && this.data?.PageName === 'aboutus' ? 'About Us' : 'Contact Us';
    return title;
  }
}
