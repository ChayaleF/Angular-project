import { Pipe, PipeTransform } from '@angular/core';
import { Fields } from '../models/fields';

@Pipe({
  name: 'enumToString'
})
export class EnumToStringPipe implements PipeTransform {
 
  transform (enumValue: any): string {
    
    return Fields[enumValue];
  }
}
