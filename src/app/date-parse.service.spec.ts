/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DateParseService } from './date-parse.service';
import { PadLeftService } from './pad-left.service';

describe('DateParseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateParseService, PadLeftService]
    });
  });

  describe('parse should', () => {
    it('parse date with separators', inject([DateParseService], (service: DateParseService) => {
      let date = service.parse('03.03.2014');
      expect(date.getTime()).toEqual(new Date(2014, 2, 3).getTime());

      date = service.parse('03.03.2014 12:34:59');
      expect(date.getTime()).toEqual(new Date(2014, 2, 3, 12, 34, 59).getTime());
    }));

    it('return null when no match', inject([DateParseService], (service: DateParseService) => {
      let date = service.parse('3.3.2014');
      expect(date).toBeNull();

      date = service.parse('03.03.2014 ');
      expect(date).toBeNull();
    }));
  });

  describe('encode should', () => {
    it('encode to string with separators', inject([DateParseService], (service: DateParseService) => {
      let dateString = service.encode(new Date(2014, 2, 3));
      expect(dateString).toEqual('03.03.2014');

      dateString = service.encode(new Date(2014, 2, 3, 14, 13, 12));
      expect(dateString).toEqual('03.03.2014 14:13:12');

      dateString = service.encode(new Date(2014, 2, 3, 1, 1, 1));
      expect(dateString).toEqual('03.03.2014 01:01:01');

      let d = new Date(1970, 0, 1);
      d.setFullYear(12, 2, 3);
      dateString = service.encode(d);
      expect(dateString).toEqual('03.03.0012');
    }));

    it('encode to null when passed null', inject([DateParseService], (service: DateParseService) => {
      let dateString = service.encode(null);
      expect(dateString).toBeNull();
    }));
  });

});
