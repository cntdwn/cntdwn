/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParameterService } from './parameter.service';

describe('DateParameterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParameterService]
    });
  });
  describe('parse date', () => {
    it('should parse date from path', inject([ParameterService], (service: ParameterService) => {
      let url = '/20170630';
      let parsedDate = service.parseDate(url);
      expect(parsedDate).toEqual(new Date(2017, 5, 30));
    }));

    it('should return null when parsing ivalid date', inject([ParameterService], (service: ParameterService) => {
      let url = '/2017343';
      let parsedDate = service.parseDate(url);
      expect(parsedDate).toBeNull();

      url = '/x/20160101';
      parsedDate = service.parseDate(url);
      expect(parsedDate).toBeNull();
    }));
  });

  describe('encodeDate', () => {
    it('should encode date', inject([ParameterService], (service: ParameterService) => {
      let date = new Date(2016, 0, 1);
      expect(service.encodeDate(date)).toEqual('20160101');
    }));
  });
});
