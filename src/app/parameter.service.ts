import { Injectable } from '@angular/core';
import { Goal } from './goal';
import { PadLeftService } from './pad-left.service';

@Injectable()
export class ParameterService {

  constructor(private padLeftService: PadLeftService) { }

  parse(url: string): Goal {
    let regex = new RegExp('^\\/(\\d{14})(?:\\/([^\\/]+))?');
    let matches = url.match(regex);

    if (matches != null && matches.length >= 2) {
      let d = new Date(1970, 0, 1);
      d.setUTCFullYear(parseInt(matches[1].slice(0, 4), 10),
                       parseInt(matches[1].slice(4, 6), 10) - 1,
                       parseInt(matches[1].slice(6, 8), 10));
      d.setUTCHours(parseInt(matches[1].slice(8, 10), 10),
                    parseInt(matches[1].slice(10, 12), 10),
                    parseInt(matches[1].slice(12, 14), 10));

      let message = matches.length >= 2 ? decodeURI(matches[2]) : null;
      return new Goal(d, message);
    }
    return null;
  }

  encode(goal: Goal): string {
    let self = this;
    function pl(input: string) {
      return self.padLeftService.padLeft(2, '0', input);
    }

    if (goal == null) {
      return null;
    }

    let params = `${goal.end.getUTCFullYear()}` +
                 `${pl((goal.end.getUTCMonth() + 1).toString())}` +
                 `${pl((goal.end.getUTCDate()).toString())}` +
                 `${pl((goal.end.getUTCHours()).toString())}` +
                 `${pl((goal.end.getUTCMinutes()).toString())}` +
                 `${pl((goal.end.getUTCSeconds()).toString())}` +
                 `${goal.message ? '/' + goal.message : ''}`;
    return encodeURI(params);
  }
}
