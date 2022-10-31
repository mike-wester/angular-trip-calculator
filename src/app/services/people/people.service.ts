import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { Person } from 'src/app/classes/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

    private _people: Person[] = [];
    private _peopleSubject: ReplaySubject<Person[]> = new ReplaySubject(null);

    constructor() { }

    public getTransactionHistory = (): Observable<Person[]> => this._peopleSubject.asObservable();

    public addPerson(person: Person): boolean {
        this._people.push(person);
        this._peopleSubject.next(this._people);

        return true;
    }
}