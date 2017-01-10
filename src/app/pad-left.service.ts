import { Injectable } from '@angular/core';

@Injectable()
export class PadLeftService {

  constructor() { }

  public padLeft(noOfDigits: number, character: string, input: any) {
    if (character == null || character.length !== 1) {
      throw new Error('character length has to be 1');
    }

    return (character.repeat(noOfDigits) + input).slice(-noOfDigits);
  }
}
