import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesPageRoutingModule } from './pages-routing.module';

import { PagesPage } from './pages.page';
import { AsideModule, HeaderModule, FooterModule, MobileModule } from '../components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsideModule,
    HeaderModule,
    FooterModule,
    MobileModule,
    PagesPageRoutingModule
  ],
  declarations: [PagesPage]
})
export class PagesPageModule {}
