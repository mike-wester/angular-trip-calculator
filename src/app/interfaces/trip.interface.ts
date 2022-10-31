import { Person } from "../classes/person"

export interface ITrip {
    id: string,
    name: string,
    people?: Person[]
    cost?: number
}
