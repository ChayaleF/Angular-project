import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from '../../models/position';
import { PositionsService } from '../../services/position.service';

@Component({
  selector: 'app-position-page',
  templateUrl: './position-page.component.html',
  styleUrls: ['./position-page.component.scss']
})
export class PositionPageComponent implements OnInit {

  constructor(public positionSvc: PositionsService,router:Router){
    console.log(this.positionToView);
   
      localStorage.getItem("name")==null?router.navigate(["/login"]):""
   
     
    
  }
  
  click(){
    alert( this.positionSvc)
  }
  ngOnInit(): void {
  }
  positionToView:Position[] =this.positionSvc.PositionList
  filterDetails:any = null
  //ארוע שמוזנק מקומפוננטת הפילטור בעת ליצה על סנן
  //הפרמטר המתקבל מכיל את הערכים שהוזנו בסינון
  filterChange($event:any){
    //שמירת נתוני הסינון, לשימוש מאוחר יותר
    console.log("filterchange ");
    
    console.log($event);
    
    this.filterDetails = $event
    //קריאה לפונקציה שמעדכנת את הרשימה לתצוגה לפי נתוני הפילטר
  this.applyFilter()
  }
  applyFilter(){
    //שימוש בפונקציית הפילטור הראשית שנמצאת בסרוויס כדי לפלטר לפי המחירים שהוזנו בשורת הסינון
    this.positionToView = this.positionSvc.filterPosition(this.filterDetails.area,this.filterDetails.field)
    console.log(this.filterDetails.field);
    
  }
}
