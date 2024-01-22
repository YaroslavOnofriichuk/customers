import createRandomUsers from './createRandomUsers';
import Customer from '../models/customer';

async function generateCustomers() {
    const randomNum = Math.floor(Math.random() * 10) + 1;

    const customers = createRandomUsers(randomNum);

    await Customer.create(customers);
};

export default generateCustomers;