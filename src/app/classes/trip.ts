import { ITrip } from '../interfaces/trip.interface';
import { Person } from './person';

export class Trip implements ITrip {
  public id: string;
  public name: string;
  public people: Person[];
  public cost?: number;

  constructor(input: ITrip) {
    this.id = input.id || '00000000-0000-0000-0000-000000000000';
    this.name = input.name || 'New Trip';
    this.people = input.people || [];
    this.cost = input.cost || 0;
  }
}
