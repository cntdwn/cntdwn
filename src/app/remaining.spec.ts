import { Remaining } from './remaining';

describe('remaining', () => {
    describe('call to create should', () => {

        it('create an instance of Remaining', () => {
            let start = new Date(2000, 0, 1);
            let end = new Date(2001, 0, 1);

            expect(1).toEqual(Remaining.create(start, end).years);
        });
    });
});