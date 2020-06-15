import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-routing.module';
import { DesktopComponent } from './desktop.component';
import {MatModule} from '../../core/mat.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [DesktopComponent],
    imports: [
        CommonModule,
        DesktopRoutingModule,
        MatModule,
        FontAwesomeModule,
        FlexLayoutModule,
        SwiperModule,
        MatSidenavModule
    ]
})
export class DesktopModule { }
