import { Remaining } from './remaining';

describe('Remaining servce', () => {
    describe('call to create should', () => {

        it('create an instance of Remaining', () => {
            let start = new Date(2000, 0, 1);
            let end = new Date(2001, 0, 1);

            expect(1).toEqual(Remaining.create(start, end).years);
        });

        it('calculate remaining', () => {
            let start = new Date(2001, 0, 1, 8, 0, 0);
            let end = new Date(2002, 1, 2, 9, 1, 1);

            let rem = Remaining.create(start, end);

            expect(rem.years).toEqual(1);
            expect(rem.months).toEqual(1);
            expect(rem.days).toEqual(1);
            expect(rem.hours).toEqual(1);
            expect(rem.minutes).toEqual(1);
            expect(rem.seconds).toEqual(1);
        });

        it('return 0 values for nagative intervals', () => {
            let start = new Date(2002, 1, 2, 9, 1, 1);
            let end = new Date(2001, 0, 1, 8, 0, 0);

            let rem = Remaining.create(start, end);

            expect(rem.years).toEqual(0);
            expect(rem.months).toEqual(0);
            expect(rem.days).toEqual(0);
            expect(rem.hours).toEqual(0);
            expect(rem.minutes).toEqual(0);
            expect(rem.seconds).toEqual(0);
        });

        it('return 0 values for same dates', () => {

            let start = new Date(2001, 0, 1, 8, 0, 0);
            let end = new Date(2001, 0, 1, 8, 0, 0);

            let rem = Remaining.create(start, end);

            expect(rem.years).toEqual(0);
            expect(rem.months).toEqual(0);
            expect(rem.days).toEqual(0);
            expect(rem.hours).toEqual(0);
            expect(rem.minutes).toEqual(0);
            expect(rem.seconds).toEqual(0);
        });
    });

});
