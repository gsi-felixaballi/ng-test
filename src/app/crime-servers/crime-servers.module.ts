import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ChartsModule} from 'ng2-charts';

import { CrimeServersRoutingModule } from './crime-servers-routing.module';
import { CrimeServersListComponent } from './crime-servers-list/crime-servers-list.component';
import { CrimeServersDetailsComponent } from './crime-servers-details/crime-servers-details.component';
import {CrimeServersService} from './crime-servers.service';
import { NetworkNodeComponent } from './crime-servers-details/network-node/network-node.component';

@NgModule({
  declarations: [CrimeServersListComponent, CrimeServersDetailsComponent, NetworkNodeComponent],
  imports: [
    NgZorroAntdModule,
    CommonModule,
    HttpClientModule,
    CrimeServersRoutingModule,
    ChartsModule
  ],
  providers: [CrimeServersService],
})
export class CrimeServersModule { }
