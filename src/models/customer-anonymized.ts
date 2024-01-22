import { Schema, Types, model } from 'mongoose';
import CustomerType from '../types/customer';

const customerAnonymizedSchema = new Schema<CustomerType>(
    {
        _id: {
            type: Types.ObjectId,
            required: true,
        },
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

const CustomerAnonymized = model<CustomerType>(
    'customer-anonymized',
    customerAnonymizedSchema,
);

export default CustomerAnonymized;
