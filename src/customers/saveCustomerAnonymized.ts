import CustomerType from '../types/customer';
import CustomerAnonymized from '../models/customer-anonymized';
import generateRandomString from './generateRandomString';

interface Document {
    fullDocument: CustomerType;
}

async function saveCustomerAnonymized({ fullDocument }: Document) {
    const newCustomerAnonymized = {
        _id: fullDocument._id,
        firstName: generateRandomString(fullDocument.firstName),
        lastName: generateRandomString(fullDocument.lastName),
        email:
            generateRandomString(fullDocument.email.split('@')[0]) +
            '@' +
            fullDocument.email.split('@')[1],
        address: {
            line1: generateRandomString(fullDocument.address.line1),
            line2: generateRandomString(fullDocument.address.line2),
            postcode: generateRandomString(fullDocument.address.postcode),
            city: fullDocument.address.city,
            state: fullDocument.address.state,
            country: fullDocument.address.country,
        },
    };

    const customerAnonymized = await CustomerAnonymized.findById(
        fullDocument._id,
    );

    if (customerAnonymized) {
        await CustomerAnonymized.updateOne(
            { _id: fullDocument._id },
            newCustomerAnonymized,
        );
    } else {
        await CustomerAnonymized.create(newCustomerAnonymized);
    }
}

export default saveCustomerAnonymized;
