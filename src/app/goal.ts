export class Goal {
    public end: Date;
    constructor(end: Date, public message: string = null) {
        if (end == null) {
            throw new Error('end has to be a valid date');
        }
        this.end = end;
    }
}
