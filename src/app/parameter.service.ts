import { Injectable } from '@angular/core';
import { Goal } from './goal';

@Injectable()
export class ParameterService {

  constructor() { }

  parse(url: string): Goal {
    let regex = new RegExp('^\\/(\\d{14})(?:\\/([^\\/]+))?');
    let matches = url.match(regex);

    if (matches != null && matches.length >= 2) {

      let date = matches.length >= 1 ? new Date(parseInt(matches[1].slice(0, 4), 10),
                                                parseInt(matches[1].slice(4, 6), 10) - 1,
                                                parseInt(matches[1].slice(6, 8), 10),
                                                parseInt(matches[1].slice(8, 10), 10),
                                                parseInt(matches[1].slice(10, 12), 10),
                                                parseInt(matches[1].slice(12, 14), 10))
                                     : null;

      let message = matches.length >= 2 ? matches[2] : null;
      return new Goal(date, message);
    }
    return null;
  }

  encode(goal: Goal): string {
    function padZero(input: string) {
      return String('00' + input).slice(-2);
    }

    if (goal == null) {
      return null;
    }

    return `${goal.end.getUTCFullYear()}` +
           `${padZero((goal.end.getUTCMonth() + 1).toString())}` +
           `${padZero((goal.end.getUTCDate()).toString())}` +
           `${padZero((goal.end.getUTCHours()).toString())}` +
           `${padZero((goal.end.getUTCMinutes()).toString())}` +
           `${padZero((goal.end.getUTCSeconds()).toString())}` +
           `${goal.message ? '/' + goal.message : ''}`;
  }
}
