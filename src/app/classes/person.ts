import { IPerson } from '../interfaces/person.interface';

export class Person implements IPerson {

    public id: string;
    public firstName?: string;
    public lastName?: string;
    public contribution: number;
    
    constructor(input: IPerson) {

        this.id = input.id || '00000000-0000-0000-0000-000000000000';
        this.firstName = input.firstName;
        this.lastName = input.lastName;
        this.contribution = input.contribution || 0
    }
}