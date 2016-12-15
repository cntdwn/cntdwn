import { Injectable } from '@angular/core';

@Injectable()
export class ParameterService {

  constructor() { }

  parseDate(url: string): Date {
    let regex = new RegExp('^\\/(\\d{8})');
    let matches = url.match(regex);

    if (matches != null && matches.length === 2) {
      return new Date(parseInt(matches[1].slice(0, 4), 10),
                      parseInt(matches[1].slice(4, 6), 10) - 1,
                      parseInt(matches[1].slice(6, 8), 10));
    }
    return null;
  }

  encodeDate(date: Date): string {
    function padZero(input: string) {
      return String('00' + input).slice(-2);
    }

    return `${date.getFullYear()}${padZero((date.getMonth() + 1).toString())}${padZero((date.getDate()).toString())}`;
  }
}
