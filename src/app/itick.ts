import { Observable } from 'rxjs/Rx';
import { Remaining } from './remaining';

export interface ITick {
    tick(end: Date): Observable<Remaining>;
}