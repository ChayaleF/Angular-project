import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PositionsService } from '../../services/position.service';
import { Position } from '../../models/position';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  close() {

    this.router.navigate(['../../'], {relativeTo:this.active})
  }
  position: Position | undefined = undefined
  name: string = ""

  constructor(private router: Router, private active: ActivatedRoute, public positionSvc: PositionsService) {

  }
  ngOnInit(): void {


  }
  getPosition(): Position | undefined {

    this.active.params.subscribe(params => {
      this.name = params['jobName']
      this.position = this.positionSvc.PositionList.find(x => x.jobName == this.name)
    })
    return this.position
  }

}
