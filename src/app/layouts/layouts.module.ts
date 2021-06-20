import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

//Components
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { LayoutsComponent } from './layouts.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { FileDragNDropDirective } from '../_directive/file-drag-n-drop.directive';

//Toastr Module
import { ToastrModule } from 'ngx-toastr';

const routes : Routes = [
{
    path: '',
    component: LayoutsComponent
}]


@NgModule({
  declarations: [LayoutsComponent,FirstComponent,SecondComponent,ThirdComponent,FileDragNDropDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatListModule,
    MatIconModule,
    ToastrModule.forRoot({
      timeOut: 30000,
    }),
  ]
})
export class LayoutsModule { }
