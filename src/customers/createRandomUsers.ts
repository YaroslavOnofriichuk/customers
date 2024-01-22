import { faker } from '@faker-js/faker';
import CustomerType from '../types/customer';

function createRandomUser(): Partial<CustomerType> {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: {
            line1: faker.location.street(),
            line2: faker.location.streetAddress(),
            postcode: faker.location.zipCode(),
            city: faker.location.city(),
            state: faker.location.state(),
            country: faker.location.country(),
        },
    };
}

function createRandomUsers(count: number): Array<Partial<CustomerType>> {
    return faker.helpers.multiple(createRandomUser, { count });
}

export default createRandomUsers;
