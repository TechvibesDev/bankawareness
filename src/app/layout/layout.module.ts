import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutPageRoutingModule } from './layout-routing.module';

import { LayoutPage } from './layout.page';
import { AsideModule, FooterModule, HeaderModule, MobileModule } from './../components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsideModule,
    HeaderModule,
    FooterModule,
    MobileModule,
    LayoutPageRoutingModule
  ],
  declarations: [LayoutPage]
})
export class LayoutPageModule {}
