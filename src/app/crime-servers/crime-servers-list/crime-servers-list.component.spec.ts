import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CrimeServersListComponent } from './crime-servers-list.component';

describe('TestComponent', () => {
  let component: CrimeServersListComponent;
  let fixture: ComponentFixture<CrimeServersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgZorroAntdModule, RouterModule, HttpClientModule],
      declarations: [ CrimeServersListComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeServersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
