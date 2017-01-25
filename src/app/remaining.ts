import * as moment from 'moment/moment';

export class Remaining {
    years: number = 0;
    months: number = 0;
    days: number = 0;
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;

    private static momentDiff(d1: Date, d2: Date): Remaining {
        let m1 = moment(d1), m2 = moment(d2);
        m1.add(m2.utcOffset() - m1.utcOffset(), 'minutes'); // shift timezone of m1 to m2

        if (m1.isSame(m2) || m1.isAfter(m2)) {
            return new Remaining();
        }

        let yDiff = m2.year() - m1.year();
        let mDiff = m2.month() - m1.month();
        let dDiff = m2.date() - m1.date();
        let hourDiff = m2.hour() - m1.hour();
        let minDiff = m2.minute() - m1.minute();
        let secDiff = m2.second() - m1.second();

        if (secDiff < 0) {
            secDiff = 60 + secDiff;
            minDiff--;
        }
        if (minDiff < 0) {
            minDiff = 60 + minDiff;
            hourDiff--;
        }
        if (hourDiff < 0) {
            hourDiff = 24 + hourDiff;
            dDiff--;
        }
        if (dDiff < 0) {
            let daysInLastFullMonth = moment(m2.year() + '-' + (m2.month() + 1), "YYYY-MM").subtract(1, 'M').daysInMonth();
            if (daysInLastFullMonth < m1.date()) { // 31/01 -> 2/03
                dDiff = daysInLastFullMonth + dDiff + (m1.date() - daysInLastFullMonth);
            } else {
                dDiff = daysInLastFullMonth + dDiff;
            }
            mDiff--;
        }
        if (mDiff < 0) {
            mDiff = 12 + mDiff;
            yDiff--;
        }

        let r = new Remaining();
        r.years = yDiff;
        r.months = mDiff;
        r.days = dDiff;
        r.hours = hourDiff;
        r.minutes = minDiff;
        r.seconds = secDiff;

        return r;
    }

    static create(start: Date, end: Date): Remaining {
        return Remaining.momentDiff(start, end);
    }

    toString(): string {
        return `${this.years} years :
                ${this.months} months :
                ${this.days} days :
                ${this.hours} hours :
                ${this.minutes} minutes :
                ${this.seconds} seconds`;
    }
}
