import { Pipe, PipeTransform } from '@angular/core';
import { PadLeftService } from './pad-left.service';

@Pipe({
  name: 'padZero'
})
export class PadZeroPipe implements PipeTransform {

  constructor(private padLeftService: PadLeftService) {

  }

  transform(value: any, args?: any): any {
    if (value != null) {
      return this.padLeftService.padLeft(2, '0', value);
    }
    return value;
  }

}
