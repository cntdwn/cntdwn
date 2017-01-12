import { Injectable } from '@angular/core';
import { PadLeftService } from './pad-left.service';

@Injectable()
export class DateParseService {

  constructor(private padLeftService: PadLeftService) { }

  parse(input: string): Date {
    let regex = /^(\d{2})\.(\d{2})\.(\d{4})(?: (\d{2}):(\d{2}):(\d{2}))?$/;
    let match = input.match(regex);

    if (match) {
      let d = new Date(1970, 0, 1);
      d.setFullYear(parseInt(match[3], 10),
                    parseInt(match[2], 10) - 1,
                    parseInt(match[1], 10));

      if (match[4]) {
        d.setHours(parseInt(match[4], 10), parseInt(match[5], 10), parseInt(match[6], 10));
      }

      return d;
    }

    return null;
  }

  encode(d: Date): string {
    let self = this;
    function pl(val: any, noOfDigits = 2) {
      return self.padLeftService.padLeft(noOfDigits, '0', val);
    }

    if (d) {
      if (d.getHours() === 0 && d.getMinutes() === 0 && d.getSeconds() === 0) {
        return `${pl(d.getDate())}.${pl(d.getMonth() + 1)}.${pl(d.getFullYear(), 4)}`;
      }
      return `${pl(d.getDate())}.` +
             `${pl(d.getMonth() + 1)}.` +
             `${pl(d.getFullYear(), 4)} ` +
             `${pl(d.getHours())}:` +
             `${pl(d.getMinutes())}:` +
             `${pl(d.getSeconds())}`;
    }
    return null;
  }
}
