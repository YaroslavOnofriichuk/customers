import { Schema, model } from 'mongoose';
import CustomerType from '../types/customer';
import saveCustomerAnonymized from '../customers/saveCustomerAnonymized';

const customerSchema = new Schema<CustomerType>(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: {
                line1: String,
                line2: String,
                postcode: String,
                city: String,
                state: String,
                country: String,
            },
            required: true,
        },
    },
    { versionKey: false, timestamps: true },
);

const Customer = model<CustomerType>('customer', customerSchema);

Customer.watch().on('change', saveCustomerAnonymized);

export default Customer;
