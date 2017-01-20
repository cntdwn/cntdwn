
export class PadLeftService {
  public padLeft(noOfDigits: number, character: string, input: any) {
    if (character == null || character.length !== 1) {
      throw new Error('character length has to be 1');
    }

    let inputStr = input.toString();
    if (inputStr.length > noOfDigits) {
      return inputStr;
    }

    return (character.repeat(noOfDigits) + inputStr).slice(-noOfDigits);
  }
}
