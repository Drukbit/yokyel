import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatModule} from '../core/mat.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';
import { AddInfoComponent } from './add-info/add-info.component';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [AuthComponent, AddInfoComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FlexLayoutModule,
        MatModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        MatDatepickerModule,
    ]
})
export class AuthModule { }
