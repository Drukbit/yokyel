import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatModule} from '../../core/mat.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FlexLayoutModule,
    MatModule,
    FormsModule
  ]
})
export class UsersModule { }
