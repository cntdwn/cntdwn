/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PadLeftService } from './pad-left.service';

describe('PadLeftService should', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PadLeftService]
    });
  });

  it('pad left', inject([PadLeftService], (service: PadLeftService) => {
    expect(service.padLeft(2, '0', 1)).toEqual('01');
    expect(service.padLeft(4, '0', 12)).toEqual('0012');
    expect(service.padLeft(2, '0', '1')).toEqual('01');
    expect(service.padLeft(5, 'x', '23')).toEqual('xxx23');
    expect(service.padLeft(2, '0', 123)).toEqual('123');
  }));

  it('fail for invalid character data', inject([PadLeftService], (service: PadLeftService) => {
    expect(() => { service.padLeft(2, null, 1); }).toThrow();
    expect(() => { service.padLeft(2, '', 1); }).toThrow();
    expect(() => { service.padLeft(2, 'ab', 1); }).toThrow();
    expect(() => { service.padLeft(2, 'abc', 1); }).toThrow();
  }));
});
