import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppService } from 'src/app/services';

import { AsideComponent } from './aside.component';

@NgModule({
  imports: [CommonModule,
    IonicModule,
    RouterModule],
  exports: [AsideComponent],
  declarations: [AsideComponent],
  providers: [],
})
export class AsideModule {
  items: Array<any> = [];
  constructor(private a: AppService) {
    this.a.category().subscribe(res => {
      this.items = res;
    },error=>{

    });
  }

}
