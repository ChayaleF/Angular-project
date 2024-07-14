import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Fields } from '../models/fields';
import {HttpClient} from '@angular/common/http'
import { Observable, Observer } from 'rxjs';
import { Position } from '../models/position';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  constructor(private http:HttpClient) { 
    this.getPositionsFromServer();
  }

  positionList: Position[] = []

  getPositionsFromServer(){
    this.http.get('https://localhost:5001/api/Position/GetAllPositions')
    .subscribe((res: any) => this.positionList = res)

  }
  public get PositionList() {
    return this.positionList
  }
 
  public filterPosition(area: string | null,field: Fields | null): Position[] {
    console.log("position service");
    console.log(this.positionList);
    
    let f = this.positionList.filter(c =>
      (area == null || c.area ==area)&&
      (field == null || c.jobField ==field)      
    )
      console.log(f);
      
    return f
  }

  getRenredPositions(): Observable<Position> {
    let o: Observable<Position> = new Observable<Position>(o => {})

     /* try {
        setTimeout(() => {
          o.next(this.costumeList[0])
        }, 2000)
        setTimeout(() => {
          o.next(this.costumeList[1])
        }, 1000);
        setTimeout(() => {
          o.next(this.costumeList[2])
          o.complete()
        }, 4000);
      }
      catch (ex) {
        o.error(ex)
      }
    })*/
    return o
  }
}
