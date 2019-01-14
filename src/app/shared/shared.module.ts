import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@NgModule({
  imports: [
    NgZorroAntdModule,
    CommonModule,
    RouterModule
  ],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class SharedModule { }
