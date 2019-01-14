import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SparksRoutingModule } from './sparks-routing.module';
import { SparksListComponent } from './sparks-list/sparks-list.component';

@NgModule({
  declarations: [SparksListComponent],
  imports: [
    CommonModule,
    SparksRoutingModule
  ]
})
export class SparksModule { }
