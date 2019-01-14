import { Component, OnInit } from '@angular/core';
import {SparksService} from '../sparks.service';

@Component({
  selector: 'app-sparks-list',
  templateUrl: './sparks-list.component.html',
  styleUrls: ['./sparks-list.component.scss']
})
export class SparksListComponent implements OnInit {

  constructor(private sparksService: SparksService) { }

  ngOnInit() {
    this.sparksService.getSparksByTag('BOTNET', 10).subscribe((response) => console.log(response))
  }

}
