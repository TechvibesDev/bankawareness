import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
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
    CategoryPageRoutingModule
  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule { }
