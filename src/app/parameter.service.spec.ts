/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParameterService } from './parameter.service';
import { PadLeftService } from './pad-left.service';
import { Goal } from './goal';

describe('ParameterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParameterService, PadLeftService]
    });
  });

  describe('parse should', () => {
    it('parse date from path', inject([ParameterService], (service: ParameterService) => {
      let url = '/#/20170630203040';
      let parsedDate = service.parse(url);

      let d =  new Date(1970, 0, 1);
      d.setUTCFullYear(2017, 5, 30);
      d.setUTCHours(20, 30, 40);

      expect(parsedDate.end).toEqual(d);
    }));

    it('return null when parsing invalid date', inject([ParameterService], (service: ParameterService) => {
      let url = '/#/2017343';
      let parsed = service.parse(url);
      expect(parsed).toBeNull();

      url = '/x/20160101';
      parsed = service.parse(url);
      expect(parsed).toBeNull();
    }));

    it('parse text', inject([ParameterService], (service: ParameterService) => {
      let url = '/#/20160101203040/something';
      let parsed = service.parse(url);

      expect(parsed.message).toEqual('something');
    }));
  });

  describe('encode should', () => {
    it('encode date', inject([ParameterService], (service: ParameterService) => {
      let date = new Date(Date.UTC(2016, 0, 1));
      let goal = new Goal(date);
      expect(service.encode(goal)).toEqual('#/20160101000000');
    }));


    it('encode date and message', inject([ParameterService], (service: ParameterService) => {
      let date = new Date(Date.UTC(2016, 0, 1));
      let goal = new Goal(date, 'msg');
      expect(service.encode(goal)).toEqual('#/20160101000000/msg');
    }));

    it('return null when envoding invalid date', inject([ParameterService], (service: ParameterService) => {
      expect(service.encode(null)).toBeNull();
    }));
  });

});
