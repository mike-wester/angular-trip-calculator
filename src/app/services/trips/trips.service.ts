import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Trip } from 'src/app/classes/trip';
import { ServicesModule } from '../services.module';

@Injectable({
  providedIn: ServicesModule,
})
export class TripsService {
  private _trips: Trip[] = [];
  private _tripsSubject: ReplaySubject<Trip[]> = new ReplaySubject(1);

  constructor() {}

  public getTrips = (): Observable<Trip[]> => this._tripsSubject.asObservable();

  public addTrip(_trip: Trip): boolean {
    this._trips.push(_trip);
    this._tripsSubject.next(this._trips);

    return true;
  }

  public updateTrip(_trip: Trip): boolean {
    let indexToUpdate = this._trips.findIndex((trip) => trip.id === _trip.id);

    if (indexToUpdate === -1) {
      return this.addTrip(_trip);
    }

    this._trips[indexToUpdate] = _trip;
    this._tripsSubject.next(this._trips);

    return true;
  }
}
