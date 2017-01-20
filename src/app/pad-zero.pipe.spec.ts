/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PadZeroPipe } from './pad-zero.pipe';
import { PadLeftService } from './pad-left.service';

describe('PadZeroPipe should', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PadLeftService]
    });
  });

  it('pad content', inject([PadLeftService], (padLeftService: PadLeftService) => {
    const pipe = new PadZeroPipe(padLeftService);
    expect(pipe.transform('2')).toEqual('02');
    expect(pipe.transform(2)).toEqual('02');
    expect(pipe.transform(12)).toEqual('12');
    expect(pipe.transform('12')).toEqual('12');
    expect(pipe.transform('123')).toEqual('123');
    expect(pipe.transform(123)).toEqual('123');
    expect(pipe.transform(null)).toBeNull();
  }));
});
