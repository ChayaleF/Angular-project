import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fields } from '../../models/fields';
import { UserService } from '../../services/user.service';
import { Position } from '../../models/position';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent  {
  constructor(private router: Router, private active: ActivatedRoute ,private userService:UserService) { }
  @Input('position') position:Position| null = null
showDetails() {
  this.router.navigate(['show-details',this.position?.jobName], {relativeTo:this.active})

}


  sendCV()
  {
    this.userService.cv=this.userService.cv?this.userService.cv+1:1
    localStorage.setItem("cv",(this.userService.cv?this.userService.cv+1:1).toString())
  }
  
}
