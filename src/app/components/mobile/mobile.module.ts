import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MobileComponent } from './mobile.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule],
  exports: [MobileComponent],
  declarations: [MobileComponent],
  providers: [],
})
export class MobileModule { }
