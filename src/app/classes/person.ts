import { IPerson } from '../interfaces/person.interface';

export class Person implements IPerson {

    public firstName: string;
    public lastName: string;
    public contribution: number;
    
    constructor(input: IPerson) {

        this.firstName = input.firstName;
        this.lastName = input.lastName;
        this.contribution = input.contribution || 0
    }
}