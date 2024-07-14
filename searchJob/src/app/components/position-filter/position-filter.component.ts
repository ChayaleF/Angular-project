import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Fields } from '../../models/fields';

@Component({
  selector: 'app-position-filter',
  templateUrl: './position-filter.component.html',
  styleUrls: ['./position-filter.component.scss']
})
export class PositionFilterComponent {

  // area: string = ''
  field: Fields|null = null
  fields: Fields []= [Fields.Angular, Fields.Java,Fields.Node,Fields.React];
  area:string=""
  areas:string[]=["Modi'in","Tel Aviv","Dan"]
  @Output('filterChange') filterChange: EventEmitter<any> = new EventEmitter<any>()

  filter() {
    console.log(this.area+this.field);
    
    this.filterChange.emit({area:this.area, field: this.field });
  }
  

}
