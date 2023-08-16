import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
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
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
