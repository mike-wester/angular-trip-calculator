import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Person } from 'src/app/classes/person';
import { ServicesModule } from '../services.module';

@Injectable({
  providedIn: ServicesModule,
})
export class PeopleService {
  private _people: Person[] = [];
  private _peopleSubject: ReplaySubject<Person[]> = new ReplaySubject(1);

  constructor() {}

  public getPeople = (): Observable<Person[]> =>
    this._peopleSubject.asObservable();

  public addPerson(_person: Person): boolean {
    this._people.push(_person);
    this._peopleSubject.next(this._people);

    return true;
  }

  public updatePerson(_person: Person): boolean {
    let indexToUpdate = this._people.findIndex(
      (person) => person.id === _person.id
    );

    if (indexToUpdate === -1) {
      return this.addPerson(_person);
    }

    this._people[indexToUpdate] = _person;
    this._peopleSubject.next(this._people);

    return true;
  }
}
