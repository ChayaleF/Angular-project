import { Component, Input, OnInit } from '@angular/core';
import { Position } from '../../models/position';

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.scss']
})
export class PositionsListComponent implements OnInit {
  @Input() positionList:Position[] =[]

  constructor() { }

  ngOnInit(): void {

  }

}
